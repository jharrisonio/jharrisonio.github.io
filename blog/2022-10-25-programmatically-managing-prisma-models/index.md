---
slug: 2022-10-25-programmatically-managing-prisma-models
title: "Programmatically managing Prisma models"
authors: jharrison
tags: [live, prisma, ast, schema, database, typescript]
---

I've woken up early this morning because I'm excited to try out something I found yesterday; a library for manipulating the Prisma schema file via code.

Why is this exciting? I'm working on a side project to automate the entire build of a web app, and that includes creating, modifying and deleting data models using Prisma. But it needs to be done programmatically. Usually I would use the [Typescript Compiler](/solutions/js-ts/ts-compiler) to read the AST and manipulate it that way, but the Prisma schema file isn't Typescript, or Javascript. It's a proprietary format, which rules out this option.

Prisma has an [internals](https://github.com/prisma/prisma/tree/main/packages/internals) library which has some functionality for this, but it's undocumented and looks difficult to work with. There's also a third party lib called [prisma-ast](https://github.com/MrLeebo/prisma-ast). Let's explore both these options.

<!--truncate-->

## Prisma Internals

Digging through the Prisma NPM package I found the Internals library. It seems it has a whole lot of random utils in there, so it's a bit hard to find the part that's used for modifying the Schema file. Searching via the Github website is too hard so I'm going to clone the repo and open it up in VSCode.

I believe I found something at [`getDmmf.ts`](https://github.com/prisma/prisma/blob/main/packages/internals/src/engine-commands/getDmmf.ts) but it's a little hard to tell. I remember there's a Prisma CLI command to pull a models from an existing database and add it your schema file. See [`prisma db pull`](https://www.prisma.io/docs/reference/api-reference/command-reference#db-pull). The `prisma db push` command would also need to read the schema file in order to convert it to SQL scripts. I'll look for the code behind these commands and work my way deeper.

This leads me to a file called [`DbPull.ts`](https://github.com/prisma/prisma/blob/main/packages/migrate/src/commands/DbPull.ts). It has a bunch of imports from that `internals` lib I mentioned before:

```ts
import {
  arg,
  checkUnsupportedDataProxy,
  Command,
  createSpinner,
  drawBox,
  format,
  formatms,
  getCommandWithExecutor,
  getConfig,
  getSchema,
  getSchemaPath,
  HelpError,
  IntrospectionEngine,
  IntrospectionSchemaVersion,
  IntrospectionWarnings,
  link,
  loadEnvFile,
  protocolToConnectorType,
} from "@prisma/internals";
```

I can't see anything in that list of imports that looks like it would generate a model though. Time to go deeper down the rabbit hole.

There's a function called [`parse`](https://github.com/prisma/prisma/blob/d45a386158438a2fb8d8af9f8acfb6f35fc1b703/packages/migrate/src/commands/DbPull.ts#L87) which seems to do a lot. Including calling one of those imported functions called [`getConfig`](https://github.com/prisma/prisma/blob/d45a386158438a2fb8d8af9f8acfb6f35fc1b703/packages/migrate/src/commands/DbPull.ts#L197). But on closer inspection that function doesn't return the right type of data to be useful. Let's keep going.


## Prisma Engines
Here's something interesting on [line 232](https://github.com/prisma/prisma/blob/d45a386158438a2fb8d8af9f8acfb6f35fc1b703/packages/migrate/src/commands/DbPull.ts#L232):

```ts
const introspectionResult = await engine.introspect(
  schema,
  args["--force"],
  args["--composite-type-depth"]
);

introspectionSchema = introspectionResult.datamodel;
introspectionWarnings = introspectionResult.warnings;
introspectionSchemaVersion = introspectionResult.version;
```

It appears the `engine.introspect()` function reads the datasource config from the schema file and returns a `datamodel` based on the database. This is what I'm looking for. But the `introspect()` seems to just be a wrapper for another function:

```ts
this.getRPCPayload("introspect", { schema, force, compositeTypeDepth });
```

I'm not very familiar with RPC so I'l have to do some reading to figure out where this actually goes. I'll do a whole-project search for "RPC" in all `*.ts` files to see if I can find the handler. No luck. But I did find some more specific RPC message names, like "getDatabaseDescription". I'll try another search for that and see what I find.

OK I think I understand how this works. Looks like a separate process is spawned and the JSON data is piped into that process using `stdin`:

```ts
if (this.child!.stdin!.destroyed) {
  throw new Error(
    `Can't execute ${JSON.stringify(
      request
    )} because introspection engine is destroyed.`
  );
}
debugRpc("SENDING RPC CALL", JSON.stringify(request));
this.child!.stdin!.write(JSON.stringify(request) + "\n");
```
Let's see what `this.child` is doing. Bad news. It's running a binary file, like an exe or shell script. I can't see these binaries in the repo but they probably need to be built. I'm going to try and build the project to see if they get generated. Then maybe I can figure out how they're generated. 

I didn't find how the engines are generated, but I did find some code that pointed me to [useful documentation](https://www.prisma.io/docs/concepts/components/prisma-engines). I'm getting a much better idea of how Prisma works now. There are engines (binary executables) for each type of database. They're implemented in [Rust](https://www.rust-lang.org/). I'm going to give up on this avenue. I don't need to see inside the binaries, I just need to read what they output. There must be a TS wrapper somewhere. I'll go back to the `engine.introspect()` function.

## A dead end or a new perspective?
After going back it looks like the Rust engine is responsible for converting the database structure into Prisma models. All it outputs is a string, which gets appended to `schema.prisma`. 

Let me just recap my goal for my own sake...my head is still stuck in the deep dive.

> Programmatically read/write/update the `schema.prisma` file

I assumed I would do that by directly manipulating the file, and *then* apply the changes to the DB. This isn't possible with the path I've gone down. But flipping this on its head, I could manipulate the *database* (using simple SQL scripts) and *retrospectively* update the schema file. 

To be honest I hadn't even thought of doing that, and it might make sense. I'm out of time today, but I'm happy that I've still got 2 options:

1. Modify the DB, then update the Schema
2. Use the [prisma-ast](https://github.com/MrLeebo/prisma-ast) library
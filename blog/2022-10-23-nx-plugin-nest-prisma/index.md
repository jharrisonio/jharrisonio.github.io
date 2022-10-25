---
slug: 2022-10-23-nx-plugin-nest-prisma
title: "Writing an NX plugin for automating Nest and Prisma"
authors: jharrison
tags: [live, nx.dev, nestjs, prisma, angular, schematics]
---

import Screenshot1 from './Screen Shot 2022-10-23 at 3.28.57 pm.png';
import Screenshot2 from './Screen Shot 2022-10-23 at 4.53.18 pm.png';
import Screenshot3 from './Screen Shot 2022-10-23 at 5.47.13 pm.png';


I'm about to resume working on a side project, a tool that helps developers build things faster. Before I start coding I feel I need to revisit the philosophy behind this tool and just get some clarification for myself. Sometimes it's really easy to get lost in the implementation and forget what you're actually building.
<!--truncate-->

## The vision
The guiding vision stems from my low-code experience. I've seen the incredible benefits this technology can bring. Unprecedented speed, baked-in quality control and as much automation as possible. I've also seen the lack of enthusiasm from developers who are used to writing code. The visual drag-and-drop interface is just so far removed from what they are used to that it creates a huge barrier. Another issue is accessibility. The good low-code platforms all cost a fortune, create vendor lock-in and hide away the details.

While my ultimate goal is to create a full-scale, full-stack platform - eventually - I recognize that I have to start small and gradually build up functionality. 


## The goal
The goal is simple; create a way of developing web apps that is faster, better and easier than the current status quo.

For me that means looking at past projects and replaying them, looking at how each phase could have been done better.

**Planning**
This is often a phase that represents duplicate effort. Architects write up specs in a wiki which a developer then has to bring to life. What if you could do both these things in a single step? What if the specs became the app?

**Coding**
Just the physical act of typing everything out verbose is very time consuming. Why are we still coding the same way we were 20 years ago? Surely there's got to be a faster way, and I don't think the answer is AI like Github Copilot. These tools just write more code, they don't remove the need for coding. 

**Features**
Even when using frameworks and pre-built libraries, we find ourselves re-creating things over and over again. Authentication, error handling, logging, roles & permissions are a few. Features like a basic CMS, notifications, case management, payments, user profiles are others that seem to get re-built for every project when there is very little difference. 

I've decided to start in the middle, the Coding phase, and spread out both ways from there.

## The hypothesis
Frameworks like NestJS and Ruby on Rails provide wrappers around standard languages that means we have to write less code to achieve our goals. But they are still pretty verbose, and we are still writing code in a text editor.
They provide more flexibility than is needed. My hypothesis is that 90% of use cases could be satisfied with a highly opinionated language that sacrifices flexibility for speed, quality and automation. And this language should be able to be presented in a variety of user interfaces. Perhaps text-based, perhaps visual. 

There are a finite amount of commands needed to build an application. Here's a quick list off the top of my head:

1. Create a workspace (project)
2. Create an application
3. Define a data model
4. Expose a REST endpoint
5. Integrate with third parties
6. Expose a GraphQL service
7. Dispatch events over websockets

While building logic, these are the key operations needed:
1. Defining/setting variables
2. Loops
3. Conditions
4. Calling functions
5. Raising/handling errors

I'm sure I've missed some, but this is enough to get the gist. Almost everything programmers do, regardless of the language falls into one of those categories. In Javascript, how many ways can you write a loop? Too many. Sure, they all have their benefits but the sheer verbosity of it surely outweighs the benefits for most use cases.


## The method
Instead of jumping straight into a user interface I'm going to build an API that can be used to build an entire application from start to finish. This can be called from a CLI for a start, to have it act on a local project. I'm going to make use of a few tools and frameworks that have already done a lot of work to automate things:

**nx.dev** for managing a monorepo. It offers really smart dependency management, including sharing them across apps and performing impact analysis (only build what changed). It also offers a really good schematics library that lets me write code generators that can even analyse the Abstract Syntax Tree (AST) of a file and apply manipulations programmatically. Simply put, it allows me to *modify* files, not just generate them from templates.

**NestJS + Prisma** for the actual underlying codebase. It's an easy framework to learn and provides the necessary abstraction on top of REST, GraphQL, Websockets and Microservices that I would have to write myself if I didn't use it. 

## Current progress
I'm at the stage where I can create a monorepo using nx.dev, spin up a microservice, rename/delete etc. I'm working on getting Prisma initialised in the NestJS microservice. At first glance the command `prisma init` just creates a couple of files but I wonder if there's more to it than that. Perhaps I can just create these files as templates and copy them into the microservice, or perhaps I actually need to run `prisma init` on the microservice.

Let's try the first method and see if it works.

The current CLI is called by typing `$ vast-cli <command> [options]`  
I set up an alias so I can call it with the command `vc`

`$ vc ws new workspace-1`  
Creates a workspace (ws is an alias for workspace)


`$ vc ms new microservice-1`  
Creates a new NestJS microservice inside the workspace.

<img src={Screenshot1} />
Looks pretty good! Although I stupidly called the file `prisma.schema` instead of `schema.prisma`. I'll manually rename that for now because re-building everything isn't the fastest process. Then I'll try and run the microservice.

By default the microservice listens on 3000. Will need to change that. But overall the microservice boots ok without errors. Get Prisma running involves a few more steps:

1. Add a default model
2. Dynamically generate the prisma client with `npm install @prisma/client` and `prisma generate`
3. Creating a Prisma service inside NestJS

Let's check if there's an existing NX.dev plugin for doing all this. Or perhaps a NestJS schematic.


## Implementing the NestJS + Prisma schematic
I found an existing schematic that seems decent at [notiz-dev/nestjs-prisma](https://github.com/notiz-dev/nestjs-prisma). To get this up and running I think I'll have to do the following steps:

1. Add `nestjs-prisma` to the microservice's default dependencies
2. Add `@prisma/client` to the dependencies too
3. Add `PrismaModule` to the imports section of `AppModule`

## A potential problem
I realise my CLI is a wrapper around the `nx` CLI which is a wrapper around the `nest` CLI which is a wrapper around the `ng` (Angular) schematics CLI. Is there benefit in preserving this chain or should I try and cut out some middlemen? I remember reading somewhere that by using NX, it understands what's changed in your project and can build it faster. Probably worth validating that before continuing.

It looks like NX provides some smart caching around running tasks, but I don't know if that will apply for my scenario. I can't see any benefit of using NX instead of the NestJS CLi directly. That being said it's kind of nice to use a single tool instead of switching tools depending on context. I'm going to proceed using NX for most things until I hit an issue.

Back to Prisma...

## Improving the build process
I've made the changes above and in the process I also improved the build/publish process to be faster and completed with a single command. Instead of building/publishing 3 projects separately, I can do it in 1. Before it worked like this:

```sh
$ yarn nx publish nx-workspace
$ yarn nx publish nx-microservice
$ yarn nx publish vast-cli
``` 

Now, I added [implicit dependencies](https://nx.dev/reference/project-configuration#implicitdependencies) to `vast-cli/project.json` and change the `publish` task to have [dependsOn](https://nx.dev/reference/project-configuration#dependson) all 'publish' tasks of its dependencies. This can be achieved with the `^` character:

```json
{
    ...
    "publish": {
        ...
       "dependsOn": ["^publish", "bump", "build"]
    },
    ...
}

```

## A microservice with a database
Hopefully with the new `nestjs-prisma` schematic installed, I can start using Prisma immediately in my microservice. Let's try it out.

```sh
$ vc ws new workspace-1 && cd workspace-1
$ vc ms new microservice-1
```
<img src={Screenshot2} />
Well...something went wrong. The error logged looked like this:

`error Couldn't find any versions for "nestjs-prisma" that matches "^4.5.0"`

I was trying to install the schematic with the same version as Prisma, which obviously isn't going to work. Let me update my dependency list and republish.

Success! Next up:

1. Automate the creation/manipulation of Prisma models (and run `prisma generate`)
2. Automate the deployment of the microservice (`nx serve && prisma migrate`)

## Generating models
I need to check if there's a CLI tool or schematic that already exists for generating models. Perhaps in Nest or Prisma itself. Doesn't look like it. Let's get to work.

A new NX generator needs to be created in my `nx-microservice` plugin. First I need to get my head around the plugin/generator structure because it still confuses me.

The problem is with the namespacing of plugins. It's hard to have a plugin work with more than 1 type of object because you need 1 generator per action (create, rename, update, etc). For example:

Plugin = @vast/nx-microservice  
Generator = app (create a new app)  
`nx g @vast/nx-microservice:app`

If I wanted to add a function to rename the microservice, I could do this:
`nx g @vast/nx-microservice:rename`

But then I can't have a generator to rename a data model, or a service in the future. This leaves 2 possible options:

1. Prefix generator names with colons (e.g. `app:rename` and `model:rename`)
2. Create a single plugin for each type of object (e.g. `nx-microservice`, `nx-model`, `nx-service`, etc)

I think I'll try the first option and see if it's viable.
Generate a new generator:

```sh
$ yarn nx g @nrwl/nx-plugin:generator model
$ yarn nx g @nrwl/nx-plugin:generator model:remove
```

<img src={Screenshot3} />
Looks like it doesn't like the colon in the generator name. Using an underscore works though. This means I could potentially put everything into a single plugin, which would be much neater. Let's see what it might look like...  


Plugin: `nx-vast`
Generators:  

| Generator | Description |
|--------------|-----------|
| `preset` | Workspace preset, with with all template files and logic for getting set up. |
|`microservice`| Create a new microservice  |
|`microservice_move`| Rename a microservice (actually handled by `@nrwl/workspace:move`)  |
|`microservice_remove`| Delete a microservice (actually handled by `@nrwl/workspace:remove`)  |
|`model`| Create a new Prisma model  |
|`model_move`| Rename a model  |
|`model_remove`| Delete a model (and run impact analysis) | 
|`model_change`| Update the definition of a model  |
|etc...  |

 This structure looks OK, it will get big but manageable. There will be some benefits in terms of shared code. It will require some refactoring of the CLI. 


 ## Wrap up
 I've run out of time today, but I'm happy with the progress. I've also found the blogging process to be helpful, it forces me to think things through before actioning them. 

 1. Got Prisma schematics installed and working with the Microservice generator
 2. Improved the publishing process to be completed in a single command
 3. Merged `nx-workspace` and `nx-microservice` plugins into a single library called `nx-vast`


 Still to do:

 1. Write the generators to create a new data model
 2. Figure out how to properly refactor the entire app if a data model changes name
 3. Figure out what to do with breaking changes, i.e a data model is deleted and other functions are broken.


 For the last piece, perhaps I could build an API that returned typescript errors. For another day...
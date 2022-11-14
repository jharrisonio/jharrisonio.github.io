---
sidebar_position: 2
---

# Quickstart: Javascript Server

This page documents how to set up a basic NodeJS project with Babel and get it listening on a specific port.
Babel is used to transpile ES6 javascript into CommonJS syntax for compatibility. 

### Prerequisites

1. [NodeJS](https://nodejs.org/en/) installed

### Initialise the project

Create an empty folder and navigate inside.  
```sh
$ mkdir js-minimal && cd js-minimal
```

Initialise a package.json file (defaults are fine).  
```sh
$ npm init
```

### Install and configure dependencies

Install production dependencies
```sh
$ npm i --save express body-parser @babel/code @babel/cli
```

Install a few dev dependencies.  
```sh
$ npm i --save-dev nodemon @babel/node @babel/preset-env @babel/plugin-transform-runtime @babel/runtime @babel/polyfill
```

The dependencies installed in this step are as follows:

1. `nodemon` A package that watches for file changes and reloads our NodeJS server.
2. `@babel/node` A CLI that works the same as the Node.js CLI but compiles with babel before running
3. `@babel/preset-env` Babel preset that allows you to use the latest JavaScript without needing to worry about syntax or polyfills
4. `@babel/plugin-transform-runtime` A plugin that enables the re-use of Babel's injected helper code to save on code size
5. `@babel/runtime` Works alongside `plugin-transform-runtime`. All of the helpers will reference the module `@babel/runtime` to avoid duplication across your compiled output

Set up a basic folder structure where `src` will be our source files, and `dist` is where Babel will output the compiled Javascript files.  
`$ mkdir src dist`

We need to configure Babel to compile our code, so we will create a `.babelrc` file.  
Create a file in the root of the project called `.babelrc`.

```json title=".babelrc"
{
  "presets": ["@babel/preset-env"],
  "plugins": [["@babel/plugin-transform-runtime"]]
}
```

Configure Nodemon to run the NodeJS server. Update `package.json` with the following commands:

```json title="package.json"
{
    ...
    "scripts": {
        "build": "babel -d ./dist ./src -s",
        "start": "node ./src/app.js",
        "start:dev": "nodemon --exec babel-node ./src/app.js"
    }
}
```

### Creating an entrypoint

Paste the following code into `src/app.js`.

```js title="src/app.js"
import express from "express";
import bodyParser from 'body-parser';

const app = express();
const port = process.env.PORT ?? 3000;

app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
```

Run `npm run start:dev` and open up your browser to [http://localhost:3000/](http://localhost:3000/) and verify everything is working!


## Adding Prisma

Install Prisma as a dev-dependency.  
```sh
$ npm i --save-dev prisma
```

Initialise the project with a simple sqlite datasource. This can be swapped to Postgres or similar later.  

```sh
$ npx prisma init --datasource-provider sqlite
```


### Add some models to the Prisma schema
Add the following models to the bottom of the `schema.prisma` file.

```prisma title="prisma/schema.prisma"
...

model User {
  id    Int     @id @default(autoincrement())
  email String  @unique
  name  String?
  posts Post[]
}

model Post {
  id        Int     @id @default(autoincrement())
  title     String
  content   String?
  published Boolean @default(false)
  author    User    @relation(fields: [authorId], references: [id])
  authorId  Int
}
```

### Migrate the database to match the schema

Run the following command to 'migrate' your local sqlite database to be inline with your schema.  
`$ npx prisma migrate dev --name init`


### Add some routes to query the database

Edit `app.js` with the following code:

```js title="src/app.js"
...


app.get('/users', async (req, res) => {
  const users = await prisma.user.findMany();
  res.json({
    success: true,
    users,
  });
})

app.post('/users', async (req, res) => {
  const { name, email } = req.body;
  try {
    const user = await prisma.user.create({
      data: {
        name,
        email,
      },
    });
    await prisma.$disconnect();
    res.json({
      success: true,
      user
    });
  } catch(e) {
    console.error(e);
    await prisma.$disconnect();
    res.json({
      success: false,
      errors: [e]
    })
  }
})
```
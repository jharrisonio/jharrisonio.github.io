# Basic NodeJS Project
This page documents how to set up a basic NodeJS project, the starting point for many examples in this documentation.

### Prerequisites
1. [NodeJS](https://nodejs.org/en/) installed

### Initialise the project
Create an empty folder and navigate inside.  
`$ mkdir ts-compiler-example && cd ts-compiler-example`  

Initialise a package.json file (defaults are fine).  
`$ npm init`  

### Install and configure dependencies

Install a few dev dependencies.  
`$ npm i --save-dev typescript @tsconfig/node14 @types/node nodemon ts-node`  

The dependencies installed in this step are as follows:  
1. `typescript` Use for writing strongly typed code and compiling it to Javascript
2. `@tsconfig/node14` A library that provides a default `tsconfig` for working with Node v14.  
3. `@types/node` Typescript definitions for the NodeJS API
4. `nodemon` A package that watches for file changes and reloads our NodeJS server.  
5. `ts-node` Typescript execution support - used by Nodemon for running Typescript files.

We need to configure Typescript to compile our code, so we will create a `tsconfig.json` file.  
Documentation for this file can be found [here](https://www.typescriptlang.org/tsconfig).

Set up a basic folder structure where `src` will be our source files, and `dist` is where Typescript will output the compiled Javascript files.  
`$ mkdir src dist`

Create a file in the root of the project called `tsconfig.json`.  

```json title="tsconfig.json"
    {
      "extends": "@tsconfig/node14/tsconfig.json",
      "compilerOptions": {
        "outDir": "dist",
        "sourceMap": true
      },
      "include": ["src/**/*"],
      "exclude": ["node_modules", "**/*.spec.ts"]
    }
```

Configure Nodemon to run the NodeJS server. Update `package.json` with the following `type` and `start` keys:

```json title="package.json"
    {
        "type": "module",
        ...
        "scripts": {
            "start": "nodemon src/app.ts"
        }
    }
```

### Creating an entrypoint
Paste the following code into `src/app.ts`.  

```ts title="src/app.ts"
    import http from 'http';

    const hostname = '127.0.0.1';
    const port = 3000;

    const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello World!');
    });

    server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
    });
```

Open up your browser to [http://localhost:3000/](http://localhost:3000/) and verify everything is working!

### Debugging
Use the following VSCode launch config to allow debugging of Typescript files directly without needing to compile.
```json title=".vscode/launch.json"
    {
        // Use IntelliSense to learn about possible attributes.
        // Hover to view descriptions of existing attributes.
        // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
        "version": "0.2.0",
        "configurations": [
            {
                "name": "Typescript App",
                "type": "node",
                "request": "launch",
                "runtimeExecutable": "node",
                "runtimeArgs": ["--nolazy", "-r", "ts-node/register/transpile-only"],
                "args": ["src/app.ts"],
                "cwd": "${workspaceRoot}",
                "internalConsoleOptions": "openOnSessionStart",
                "skipFiles": [
                    "<node_internals>/**"
                ]
            }
        ]
    }
```
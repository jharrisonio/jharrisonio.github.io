# Basic NodeJS Project
This page documents how to set up an ExpressJS project.

### Prerequisites
1. [NodeJS](https://nodejs.org/en/) installed

### Initialise the project
Create an empty folder and navigate inside.  
`$ mkdir my-express-app && cd my-express-app`  

Initialise a package.json file (defaults are fine).  
`$ npm init`  

### Install and configure dependencies

Install Express.  
`$ npm i express`  

Install some dev dependencies:
`$ npm i --save-dev nodemon`  


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
---
sidebar_position: 4
---

# Typescript Parsing
This page documents a sample project that picks up a Typescript file, parses it and outputs the [AST](/solutions/general/abstract-syntax-trees).

### Prerequisites
1. [Basic NodeJS Project](/solutions/js-ts/ts-server-quickstart) created
2. Move `typescript` from a dev-dependency to a dependency
3. Read about the [Typescript Compiler](/solutions/js-ts/ts-compiler)


### Sample Git Repo
The code on this page can be found in this repo: [jharrisonio/sample-ts-parsing](https://github.com/jharrisonio/sample-ts-parsing)

### Writing code to parse a Typescript file
Create a sample typescript file to parse at `src/sample-files/index.ts`.  

:::info
This code doesn't get run, so it doesn't matter if there are errors. For example, `myModule` doesn't exist. This file will be read and parsed into an AST by our program.
:::


```ts
import { getProduct } from './myModule';
let a = 10;
let b = 4;

let product = getProduct();
```

Create the following file at `src/ts-parser.ts`.  
```ts
// src/ts-parser.ts

import * as ts from 'typescript';
import * as path from "path";
type TreeNode = {
    name: string;
    kind: string;
    type?: string;
    children: TreeNode[];
}

export class Parser {
    sourceFile: ts.SourceFile | undefined;
    program: ts.Program;
    typeChecker: ts.TypeChecker;
    constructor(file: string) {
        let filename = path.join(__dirname, file);
        this.program = ts.createProgram(
            [filename],
            {}
        );
        this.sourceFile = this.program.getSourceFile(filename);
        this.typeChecker = this.program.getTypeChecker();
    }

    getTree() {
        let tree: TreeNode = {
            name: 'root',
            kind: ts.SyntaxKind.SourceFile,
            children: []
        };
        if (this.sourceFile !== undefined) {
            tree = this.getChildren(this.sourceFile);
        }
        return tree;
    }

    getChildren(node: ts.Node): TreeNode {
        let tree: TreeNode = {
            name: node.getText(),
            kind: ts.SyntaxKind[node.kind],
            children: []
        };

        // if (node.kind === ts.SyntaxKind.VariableDeclaration)  {
        console.log(`Kind: ${ts.SyntaxKind[node.kind]}`)
        if (node.kind === ts.SyntaxKind.VariableDeclaration) {
            let type = this.typeChecker.getTypeAtLocation(node);
            tree.type = this.typeChecker.typeToString(type);
        }
        // }

        // Loop over all child nodes
        node.forEachChild(child => {
            tree.children.push(this.getChildren(child));
        });
        
        return tree;
    }
}
```

Update `src/app.ts` with the following:  
```ts
// src/app.ts

import http from 'http';
import { Parser } from './ts-parser';

const hostname = '127.0.0.1';
const port = 8080;

const server = http.createServer((req, res) => {
    const parser = new Parser('./sample-files/index.ts');
    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(parser.getTree(), null, 2));
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
```

### Running the app
Open up a terminal and run:  
$ npm run start

Load up the site in the browser: [http://localhost:8080](http://localhost:8080)

Observe the following tree structure:  
```json
{
  "name": "import { getProduct } from './myModule';\nlet a = 10;\nlet b = 4;\n\nlet product = getProduct();",
  "kind": "SourceFile",
  "children": [
    {
      "name": "import { getProduct } from './myModule';",
      "kind": "ImportDeclaration",
      "children": [
        {
          "name": "{ getProduct }",
          "kind": "ImportClause",
          "children": [
            {
              "name": "{ getProduct }",
              "kind": "NamedImports",
              "children": [
                {
                  "name": "getProduct",
                  "kind": "ImportSpecifier",
                  "children": [
                    {
                      "name": "getProduct",
                      "kind": "Identifier",
                      "children": []
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "name": "'./myModule'",
          "kind": "StringLiteral",
          "children": []
        }
      ]
    },
    {
      "name": "let a = 10;",
      "kind": "FirstStatement",
      "children": [
        {
          "name": "let a = 10",
          "kind": "VariableDeclarationList",
          "children": [
            {
              "name": "a = 10",
              "kind": "VariableDeclaration",
              "children": [
                {
                  "name": "a",
                  "kind": "Identifier",
                  "children": []
                },
                {
                  "name": "10",
                  "kind": "FirstLiteralToken",
                  "children": []
                }
              ],
              "type": "number"
            }
          ]
        }
      ]
    },
    {
      "name": "let b = 4;",
      "kind": "FirstStatement",
      "children": [
        {
          "name": "let b = 4",
          "kind": "VariableDeclarationList",
          "children": [
            {
              "name": "b = 4",
              "kind": "VariableDeclaration",
              "children": [
                {
                  "name": "b",
                  "kind": "Identifier",
                  "children": []
                },
                {
                  "name": "4",
                  "kind": "FirstLiteralToken",
                  "children": []
                }
              ],
              "type": "number"
            }
          ]
        }
      ]
    },
    {
      "name": "let product = getProduct();",
      "kind": "FirstStatement",
      "children": [
        {
          "name": "let product = getProduct()",
          "kind": "VariableDeclarationList",
          "children": [
            {
              "name": "product = getProduct()",
              "kind": "VariableDeclaration",
              "children": [
                {
                  "name": "product",
                  "kind": "Identifier",
                  "children": []
                },
                {
                  "name": "getProduct()",
                  "kind": "CallExpression",
                  "children": [
                    {
                      "name": "getProduct",
                      "kind": "Identifier",
                      "children": []
                    }
                  ]
                }
              ],
              "type": "any"
            }
          ]
        }
      ]
    },
    {
      "name": "",
      "kind": "EndOfFileToken",
      "children": []
    }
  ]
}
```

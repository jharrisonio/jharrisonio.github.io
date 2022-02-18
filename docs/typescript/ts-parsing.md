---
sidebar_position: 1
---

# Typescript Parsing
This page documents a sample project that picks up a Typescript file, parses it and outputs the [AST](/docs//programming/abstract-syntax-trees).

### Prerequisites
1. [Basic NodeJS Project](/docs/programming/basic-nodejs-setup) created
2. Move `typescript` from a dev-dependency to a dependency
3. Read about the [Typescript Compiler](/docs/typescript/ts-compiler)

### Writing code to parse a Typescript file
Create a sample typescript file to parse at `src/sample-project/index.ts`:  
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
    const parser = new Parser('./sample-project/index.ts');
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end(JSON.stringify(parser.getTree()));
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
```

### Running the app
Open up a terminal and run:  
$ npm run start

Load up the site in the browser: [http://localhost:3000][http://localhost:3000]

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
                        "type": "Product"
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

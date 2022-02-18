---
sidebar_position: 1
---

# Typescript Compiler
The Typescript Compiler can be found in the [Typescript Github Repo](https://github.com/microsoft/TypeScript/tree/main/src/compiler). It provides an extensive API to...

 - Parse Typescript files
 - Traverse the AST
 - Manipulate the AST
 - Type check declarations inside the AST
 - Resolve imported modules and identify their exports and types
 - Read code in memory or from the filesystem
 - Lots more

## Usage
The Typescript NPM package is generally used as a development tool for compiling TS files into JS.
For this reason, it can be difficult to find information about using the compiler feature by itself to programmatically work with TS files. Below are some important points to note:

 - Install as an NPM dependency and not devDependency
 - It doesn't work easily in the browser (although [some people](https://github.com/dsherret/ts-ast-viewer) seem to have figured it out)
 - Read the [Wiki entry](https://github.com/Microsoft/TypeScript/wiki/Using-the-Compiler-API) from Microsoft on the TS Compiler

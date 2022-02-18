# Abstract Syntax Trees - AST

## Overview
When programming languages need to be compiled down to a lower level, they go through a process that converts the raw text into a tree that describes the flow of logic through the file. The diagram below is an example of how a simple expression, `let a = b`, is converted into an AST.

![Code to AST diagram](/img/docs/code-ast.png)

## Why are ASTs useful?
Many common tools rely on ASTs to do their magic. Below are a few examples:
 - Babel -> takes code and transforms it to support older versions
 - ESLint -> analyses files to validate best practices, errors & incorrect syntax
 - jscodeshift -> refactors code en bulk

With a fundamental knowledge of ASTs, developers can better work with these tools and understand their how to configure them properly.

## AST Phases
When working with ASTs there are 4 phases split into 2 categories; reading & writing (input and output).
1. Reading  
  a. **Parse:** Read the source code and convert it to an AST  
  b. **Traverse:** Process the AST nodes  
2. Writing  
  a. **Manipulate:** Alter the AST accordingly  
  b. **Generate:** Convert the AST to newly formatted code  

## Tools for working with ASTs
### Typescript
The typescript [Github repo](https://github.com/microsoft/TypeScript/tree/main/src/compiler) actually has a folder called 'compiler' which is largely undocumented but provides APIs to work with TS ASTs.

### Recast
[Recast](https://github.com/benjamn/recast) is an NPM library for working with Javascript & Typescript. It supports parsing (reading) and printing (writing).

## Resources
 - Video: [Mastering the art of AST](https://www.youtube.com/watch?v=C06MohLG_3s)
 - Online Tool: [Abstract Syntax Tree Generator](https://www.101computing.net/abstract-syntax-tree-generator/)
 - Online Tool: [Typescript AST Viewer](https://ts-ast-viewer.com/#code/DYUwLgBAhhC8ECMDcQ)
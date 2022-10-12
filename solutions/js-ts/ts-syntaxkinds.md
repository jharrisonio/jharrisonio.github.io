---
sidebar_position: 3
---

# Typescript SyntaxKinds
This page captures ts.SytnaxKind enumerations which are largely undocumented.

| SyntaxKind             | Description |
| -----------------------| ----------- |
| SourceFile             | A Typescript file from which the program is generated.       |
| FirstStatement         | Can appear multiple times in a file. Seems to be any top level statement. |
| VariableDeclarationList| Example: `let { a, b, c} = input;`. <br/>Also `let a = 10` is still treated as a VariableDeclarationList even though it only contains a single declaration. Contains a list of VariableDeclaration. | 
| VariableDeclaration    | `let a;` = Identifier <br/> `let a: string` = Identifier, StringKeyword <br/> `let a: number = 10` = Identifier, NumberKeyword, NumericalLiteral <br/> `let a: boolean = 10 > 5` = Identifier, BooleanKeyword, BinaryExpression  |
| Identifier             | Seen anywhere a variable is declared. References the variable name. |


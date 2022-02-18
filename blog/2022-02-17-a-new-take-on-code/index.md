---
slug: a-new-take-on-code-1
title: "[Part 1] A new take on code"
authors: jharrison
tags: [low-code, ast]
---
## Introduction

When you read the word "code", you probably have a mental image of a black screen with lines and lines of text. Code has been thought of in this way for many decades. While there have been improvements to the ways programmers work, their day-to-day tasks remain pretty consistent with the tasks programmers were doing back in the 90s; writing code, debugging, compiling, testing and probably not getting enough sleep.

Low code platforms have tried to create a programming renaissance, allowing developers to do more problem solving and less troubleshooting. All low-code platforms that I know of use some kind of metamodel to store information about the apps, databases and functions you create on their platform. Because of this, they fall into two categories:

1. Mainstream runtime with proprietary compiler (e.g. .NET runtime, metamodel compiled to C#)
2. Proprietary Runtime to convert the metamodel on the fly

Both have pros and cons but regardless of which one you end up with they both rely on a proprietary language for saving data about your apps. 

To put it another way , there is an extra layer (e.g. XML, JSON or YAML) between you and the code that gets executed.

In this article I will explore the idea of creating a low-code platform without the need for that extra layer. I will be building a visual layer directly on top of Typescript.

## Below the low-code surface
Before getting into the detail, it's worth noting *why* low-code platforms use a metamodel.

1. They need to store extra information about functions, objects, etc that can't easily be represented in a standard programming language
2. They need to be able to visually represent a snippet of code, and it is easier to do this through a structure like XML or JSON because you can control the properties that are saved

Let's take a look at a low-code function from OutSystems.

import myImageUrl from './low-code-function.png';

<img src={myImageUrl} alt="Low-code Function" width="300"/>

In OutSystems, the above function ends up in a format called `OML`, which is an proprietary wrapper around `XML`. The underlying `XML` for the `TaskCreate` function definition (not including the logic inside) looks like this:

```xml
<Flows.UserAction Key="mrc4y9BUy0SWUBxAeyTGew" GeneralHash="Fow22gnN2e+ENaqWc+N2TQ" DebuggerHash="5VhKjyQwmwfIgvhMkOVvfA" LastModifiedByCommand="y_Zh7wvkrUWd4PRdo9hxUA" CreatedBy="james@jharrison.io" LastModifiedBy="james@jharrison.io" LastModifiedDate="2022-02-17 16:13:22" Name="TaskCreate">
  <Image></Image>
  <TextResources></TextResources>
  <NodesShownInESpaceTree></NodesShownInESpaceTree>
  <NodesNotShownInESpaceTree HasChildren="Yes"></NodesNotShownInESpaceTree>
  <Metadata></Metadata>
  <LocalVariables></LocalVariables>
  <InputParameters Count="1">
    <Variables.GenericInputParameter Key="NiBA4+WhbkaMdEb3b1rUcA" Name="Source" Type="Structure:/Structures.UqPK12lz_EufNmE+nOkjXA" CreatedBy="james@jharrison.io" LastModifiedBy="james@jharrison.io" LastModifiedDate="2022-02-17 16:00:14">
      <TextResources></TextResources>
      <DefaultValue></DefaultValue>
      <TestAttributeValues></TestAttributeValues>
      <Metadata></Metadata>
    </Variables.GenericInputParameter>
  </InputParameters>
  <OutputParameters Count="1">
    <Variables.GenericOutputParameter Key="FHsx1aCRYEWzW0Mk0hDqCA" Name="Id" Type="EntityIdentifierType:/Entities.wx1xKBuOK0SSd7DncHmTMA/IdentifierType" CreatedBy="james@jharrison.io" LastModifiedBy="james@jharrison.io" LastModifiedDate="2022-02-17 16:01:58">
      <TextResources></TextResources>
      <DefaultValue></DefaultValue>
      <Metadata></Metadata>
    </Variables.GenericOutputParameter>
  </OutputParameters>
</Flows.UserAction>
```

## The Hypothesis

> *A low code platform can be built on top of raw Typescript without the need for an additional metamodel.*


### Metamodel Properties
Using the OutSystems example above, we can extract the following properties:

- Function name
- Function description (documentation)
- Function visibility (public or private)
- Function icon (for use in visual canvas)
- Cache settings
- Input arguments
- Input argument data types
- Output arguments
- Output argument data types
- Created/modified details (who and when)
- Version control details

### Typescript Properties
If we were to write the same function in Typescript, it would look like this:

```ts title="src/CreateTask.ts"
/**
* Creates a new task and saves it to the database
*
* @param source The details of the task to insert
* @returns The ID of the task after it is saved in the database
*/
const CreateTask = function(source: Task): TaskIdentifier {
  // perform some logic
}
```

There is actually a surprising amount of information available in this simple file. The reason low-code platforms use a metamodel is probably because it seems difficult to extract this information in a structured way.

But there is a way...the [Typescript Compiler](../../docs/typescript/ts-compiler) and the [Abstract Syntax Tree](../../docs/programming/abstract-syntax-trees).
---
slug: a-new-take-on-code-2
title: "[Part 2] A new take on code"
authors: jharrison
tags: [low-code, ast]
---
## Introduction
In the previous post I presented the current state of programming and low-code platforms.
Let's now take a look at what is required to implement a low-code UI on top of pure Typescript.

## Top level statements
Once a blank 'file' has been opened, the first thing the user needs to do is *add* something.
What can that 'something' be? What should be supported as a bare minimum?

 - Function declaration
 - Variable declaration
 - Type declaration (or should we force Types to be standalone files?)
 - Import library (maybe too hard for now)
 - Ability to 'export' the above or leave them private

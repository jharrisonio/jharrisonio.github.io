---
sidebar_position: 1
---

# NX Basics
This page documents how to use the NX CLI tool for generating workspaces, apps and plugins.
A sample project will be created called "Vast".

## Getting Started

### Prerequisites
1. [NX CLI](https://nx.dev/)

### Generate the workspace
Call the create-nx-workspace CLI tool, give it a name and cd into the folder.
`$ npx create-nx-workspace@latest nx-test-workspace --preset=ts --nxCloud=false --packageManager=yarn && cd nx-test-workspace`  

### Adding an app to the workspace

NX plugins are installed via NPM. A list of community plugins can be found [here](https://nx.dev/community#create-nx-plugin).  
`$ npm i -D @nrwl/node`
`$ yarn add -D @nrwl/node`

Once installed, plugins can be called via the nx CLI tool.  
`$ nx g @nrwl/node:app my-app`

Libraries can also be generated:  
`$ nx g @nrwl/js:lib my-lib`

And they can be publishable:
`$ nx g @nrwl/js:lib mylib --publishable --importPath=@myorg/mylib`

### Building an app
Apps can be built by running this command from the monorepo root:  
`$ nx run myapp:build`

All built files are put into the `dist` folder in the root of the monorepo.

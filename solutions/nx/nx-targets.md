---
sidebar_position: 3
---

# NX Targets
This page explains how to create and use NX targets found inside `project.json` files.

## Overview

### Common Executors
A list of executors can be found on the [NX Workspace Documentation](https://nx.dev/packages/workspace)
1. @nx/workspace:run-commands - run any custom commands
2. @nx/workspace:run-script - run an NPM script

### Generate the workspace
Call the create-nx-workspace CLI tool, give it a name and cd into the folder.
`$ npx create-nx-workspace@latest vast && cd vast`  

1. What to create in the new workspace = ts
2. Set up distributed caching using Nx Cloud = No

### Adding an app to the workspace

NX plugins are installed via NPM. A list of community plugins can be found [here](https://nx.dev/community#create-nx-plugin).  
`$ npm i @nrwl/node`

Once installed, plugins can be called via the nx CLI tool.  
`$ nx generate @nrwl/node:app my-app`


### Building an app
Apps can be built by running this command from the monorepo root:  
`$ nx build myapp`

All built files are put into the `dist` folder in the root of the monorepo.

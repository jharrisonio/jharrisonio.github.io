---
sidebar_position: 1
---

# NX Plugin Development
This page describes how to create plugins to extend NX's functionality. Nx plugins are npm packages that contain generators and executors to extend a Nx workspace. Generators are blueprints to create new files from templates, and executors run those files. These plugins also update the nx.json when generating new libs or apps.

See the [documentation](https://nx.dev/packages/nx-plugin)


## Creating a Plugin
Plugins can either be created in a blank workspace or added to an existing workspace.


### New Workspace
Call the create-nx-plugin CLI tool, specify a workspace name and plugin name.  
`$ npx create-nx-plugin [workspaceName] --pluginName [pluginName]`  


### Existing Workspace
Install the @nrwl/nx-plugin dependency using NPM and then use the provided plugin generator.  
`$ npm i @nrwl/nx-plugin`  
`$ nx g @nrwl/nx-plugin:plugin [pluginName]`


### Adding more generators to the plugin
Plugins are created with a basic generator and executor. To add another generator, use this command:  
`$ nx g @nrwl/nx-plugin:generator [generatorName] --project=[pluginName]`

### Creating a 'preset' generator
A Preset is a customization option which you provide when creating a new workspace. TS, Node, React are some internal presets that Nx provides by default.

To create a preset, follow the steps above but add a generator named 'preset':   
`$ nx g @nrwl/nx-plugin:generator preset --project=[pluginName]`


## Building & Testing Plugins

### Building the plugin
You can build a plugin in the same way other NX packages are built:  
`$ nx build [pluginName]`

All built files are put into the `dist` folder in the root of the monorepo.


### Testing the plugin
Plugins come with Unit and E2E tests out of the box.
Unit tests can be run with the following command:  
`$ nx test [pluginName]`

E2E test can be run with this command:  
`$ nx e2e [pluginName-e2e]`

### Publishing to NPM
See the page on [Running a Local NPM Registry](/docs/node/node.md)
To easily increment the version number and perform a build, edit `project.json` to include targets like this:

```json
{
  // ... other project.json properties here
  "targets": {
    // .. other targets here, e.g. 'build'

    // the 'bump' target increments the NPM version number, e.g. 0.0.1 -> 0.0.2
    "bump": {
      "executor": "nx:run-commands",
      "options": {
        "cwd": "./packages/nx-vast",
        "commands": [
          "npm version patch --force"
        ]
      }
    },

    // the 'publish' target changes directories to the 'dist' folder and publishes the built package to a local repository running Verdaccio. It also ensures the 'bump' and 'build' targets are run first (in that order)
    "publish": {
      "executor": "nx:run-commands",
      "options": {
        "cwd": "./dist/packages/nx-vast",
        "commands": [
          "npm publish --tag=latest --registry=http://localhost:4873"
        ]
      },
      "dependsOn": ["bump", "build"]
    }
    }
  }
}
```
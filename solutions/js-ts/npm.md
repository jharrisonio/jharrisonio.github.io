---
sidebar_position: 3
---

# NPM

## Creating a local NPM registry
Sometimes it is necessary to test NPM packages locally before they are published to the NPM registry.
[Verdaccio](https://verdaccio.org/) is a tool that creates a local registry.

### Getting Started with Verdaccio  
Run the following command to install Verdaccio globally:  
`$ npm install --global verdaccio`

Set the registry globally for all projects:  
`$ npm set registry http://localhost:4873`

Log in to the registry:  
`$ npm adduser --registry http://localhost:4873`

Navigate into the package and publish
`$ cd [my-package] && npm publish --tag=latest --registry http://localhost:4873/`
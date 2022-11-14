"use strict";(self.webpackChunklearnings=self.webpackChunklearnings||[]).push([[3766],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),p=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,h=u["".concat(o,".").concat(m)]||u[m]||d[m]||s;return n?a.createElement(h,i(i({ref:t},c),{},{components:n})):a.createElement(h,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,i=new Array(s);i[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<s;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8107:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const s={sidebar_position:2},i="Quickstart: Javascript Server",l={unversionedId:"js-ts/js-server-quickstart",id:"js-ts/js-server-quickstart",title:"Quickstart: Javascript Server",description:"This page documents how to set up a basic NodeJS project with Babel and get it listening on a specific port.",source:"@site/solutions/js-ts/js-server-quickstart.md",sourceDirName:"js-ts",slug:"/js-ts/js-server-quickstart",permalink:"/solutions/js-ts/js-server-quickstart",draft:!1,editUrl:"https://github.com/jharrisonio/jharrisonio.github.io/tree/master/solutions/js-ts/js-server-quickstart.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Quickstart: React Project",permalink:"/solutions/js-ts/react-quickstart"},next:{title:"NPM",permalink:"/solutions/js-ts/npm"}},o={},p=[{value:"Prerequisites",id:"prerequisites",level:3},{value:"Initialise the project",id:"initialise-the-project",level:3},{value:"Install and configure dependencies",id:"install-and-configure-dependencies",level:3},{value:"Creating an entrypoint",id:"creating-an-entrypoint",level:3},{value:"Adding Prisma",id:"adding-prisma",level:2},{value:"Add some models to the Prisma schema",id:"add-some-models-to-the-prisma-schema",level:3},{value:"Migrate the database to match the schema",id:"migrate-the-database-to-match-the-schema",level:3},{value:"Add some routes to query the database",id:"add-some-routes-to-query-the-database",level:3}],c={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"quickstart-javascript-server"},"Quickstart: Javascript Server"),(0,r.kt)("p",null,"This page documents how to set up a basic NodeJS project with Babel and get it listening on a specific port.\nBabel is used to transpile ES6 javascript into CommonJS syntax for compatibility. "),(0,r.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://nodejs.org/en/"},"NodeJS")," installed")),(0,r.kt)("h3",{id:"initialise-the-project"},"Initialise the project"),(0,r.kt)("p",null,"Create an empty folder and navigate inside.  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ mkdir js-minimal && cd js-minimal\n")),(0,r.kt)("p",null,"Initialise a package.json file (defaults are fine).  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ npm init\n")),(0,r.kt)("h3",{id:"install-and-configure-dependencies"},"Install and configure dependencies"),(0,r.kt)("p",null,"Install production dependencies"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ npm i --save express body-parser @babel/code @babel/cli\n")),(0,r.kt)("p",null,"Install a few dev dependencies.  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ npm i --save-dev nodemon @babel/node @babel/preset-env @babel/plugin-transform-runtime @babel/runtime @babel/polyfill\n")),(0,r.kt)("p",null,"The dependencies installed in this step are as follows:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"nodemon")," A package that watches for file changes and reloads our NodeJS server."),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"@babel/node")," A CLI that works the same as the Node.js CLI but compiles with babel before running"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"@babel/preset-env")," Babel preset that allows you to use the latest JavaScript without needing to worry about syntax or polyfills"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"@babel/plugin-transform-runtime")," A plugin that enables the re-use of Babel's injected helper code to save on code size"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"@babel/runtime")," Works alongside ",(0,r.kt)("inlineCode",{parentName:"li"},"plugin-transform-runtime"),". All of the helpers will reference the module ",(0,r.kt)("inlineCode",{parentName:"li"},"@babel/runtime")," to avoid duplication across your compiled output")),(0,r.kt)("p",null,"Set up a basic folder structure where ",(0,r.kt)("inlineCode",{parentName:"p"},"src")," will be our source files, and ",(0,r.kt)("inlineCode",{parentName:"p"},"dist")," is where Babel will output the compiled Javascript files.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"$ mkdir src dist")),(0,r.kt)("p",null,"We need to configure Babel to compile our code, so we will create a ",(0,r.kt)("inlineCode",{parentName:"p"},".babelrc")," file.",(0,r.kt)("br",{parentName:"p"}),"\n","Create a file in the root of the project called ",(0,r.kt)("inlineCode",{parentName:"p"},".babelrc"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title=".babelrc"',title:'".babelrc"'},'{\n  "presets": ["@babel/preset-env"],\n  "plugins": [["@babel/plugin-transform-runtime"]]\n}\n')),(0,r.kt)("p",null,"Configure Nodemon to run the NodeJS server. Update ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," with the following commands:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json",metastring:'title="package.json"',title:'"package.json"'},'{\n    ...\n    "scripts": {\n        "build": "babel -d ./dist ./src -s",\n        "start": "node ./src/app.js",\n        "start:dev": "nodemon --exec babel-node ./src/app.js"\n    }\n}\n')),(0,r.kt)("h3",{id:"creating-an-entrypoint"},"Creating an entrypoint"),(0,r.kt)("p",null,"Paste the following code into ",(0,r.kt)("inlineCode",{parentName:"p"},"src/app.js"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/app.js"',title:'"src/app.js"'},'import express from "express";\nimport bodyParser from \'body-parser\';\n\nconst app = express();\nconst port = process.env.PORT ?? 3000;\n\napp.use(bodyParser.json());\n\napp.get("/", (req, res) => {\n  res.send("Hello World!");\n});\n\napp.listen(port, () => {\n  console.log(`Example app listening on port ${port}`);\n});\n')),(0,r.kt)("p",null,"Run ",(0,r.kt)("inlineCode",{parentName:"p"},"npm run start:dev")," and open up your browser to ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:3000/"},"http://localhost:3000/")," and verify everything is working!"),(0,r.kt)("h2",{id:"adding-prisma"},"Adding Prisma"),(0,r.kt)("p",null,"Install Prisma as a dev-dependency.  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ npm i --save-dev prisma\n")),(0,r.kt)("p",null,"Initialise the project with a simple sqlite datasource. This can be swapped to Postgres or similar later.  "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"$ npx prisma init --datasource-provider sqlite\n")),(0,r.kt)("h3",{id:"add-some-models-to-the-prisma-schema"},"Add some models to the Prisma schema"),(0,r.kt)("p",null,"Add the following models to the bottom of the ",(0,r.kt)("inlineCode",{parentName:"p"},"schema.prisma")," file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-prisma",metastring:'title="prisma/schema.prisma"',title:'"prisma/schema.prisma"'},"...\n\nmodel User {\n  id    Int     @id @default(autoincrement())\n  email String  @unique\n  name  String?\n  posts Post[]\n}\n\nmodel Post {\n  id        Int     @id @default(autoincrement())\n  title     String\n  content   String?\n  published Boolean @default(false)\n  author    User    @relation(fields: [authorId], references: [id])\n  authorId  Int\n}\n")),(0,r.kt)("h3",{id:"migrate-the-database-to-match-the-schema"},"Migrate the database to match the schema"),(0,r.kt)("p",null,"Run the following command to 'migrate' your local sqlite database to be inline with your schema.",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("inlineCode",{parentName:"p"},"$ npx prisma migrate dev --name init")),(0,r.kt)("h3",{id:"add-some-routes-to-query-the-database"},"Add some routes to query the database"),(0,r.kt)("p",null,"Edit ",(0,r.kt)("inlineCode",{parentName:"p"},"app.js")," with the following code:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/app.js"',title:'"src/app.js"'},"...\n\n\napp.get('/users', async (req, res) => {\n  const users = await prisma.user.findMany();\n  res.json({\n    success: true,\n    users,\n  });\n})\n\napp.post('/users', async (req, res) => {\n  const { name, email } = req.body;\n  try {\n    const user = await prisma.user.create({\n      data: {\n        name,\n        email,\n      },\n    });\n    await prisma.$disconnect();\n    res.json({\n      success: true,\n      user\n    });\n  } catch(e) {\n    console.error(e);\n    await prisma.$disconnect();\n    res.json({\n      success: false,\n      errors: [e]\n    })\n  }\n})\n")))}d.isMDXComponent=!0}}]);
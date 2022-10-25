"use strict";(self.webpackChunklearnings=self.webpackChunklearnings||[]).push([[973],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2757:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:3},i="NX Targets",p={unversionedId:"nx/nx-targets",id:"nx/nx-targets",title:"NX Targets",description:"This page explains how to create and use NX targets found inside project.json files.",source:"@site/solutions/nx/nx-targets.md",sourceDirName:"nx",slug:"/nx/nx-targets",permalink:"/solutions/nx/nx-targets",draft:!1,editUrl:"https://github.com/jharrisonio/jharrisonio.github.io/tree/master/solutions/nx/nx-targets.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"NX Plugin Development",permalink:"/solutions/nx/nx-plugin-development"}},l={},s=[{value:"Overview",id:"overview",level:2},{value:"Common Executors",id:"common-executors",level:3},{value:"Generate the workspace",id:"generate-the-workspace",level:3},{value:"Adding an app to the workspace",id:"adding-an-app-to-the-workspace",level:3},{value:"Building an app",id:"building-an-app",level:3}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"nx-targets"},"NX Targets"),(0,a.kt)("p",null,"This page explains how to create and use NX targets found inside ",(0,a.kt)("inlineCode",{parentName:"p"},"project.json")," files."),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("h3",{id:"common-executors"},"Common Executors"),(0,a.kt)("p",null,"A list of executors can be found on the ",(0,a.kt)("a",{parentName:"p",href:"https://nx.dev/packages/workspace"},"NX Workspace Documentation")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"@nx/workspace:run-commands - run any custom commands"),(0,a.kt)("li",{parentName:"ol"},"@nx/workspace:run-script - run an NPM script")),(0,a.kt)("h3",{id:"generate-the-workspace"},"Generate the workspace"),(0,a.kt)("p",null,"Call the create-nx-workspace CLI tool, give it a name and cd into the folder.\n",(0,a.kt)("inlineCode",{parentName:"p"},"$ npx create-nx-workspace@latest vast && cd vast"),"  "),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"What to create in the new workspace = ts"),(0,a.kt)("li",{parentName:"ol"},"Set up distributed caching using Nx Cloud = No")),(0,a.kt)("h3",{id:"adding-an-app-to-the-workspace"},"Adding an app to the workspace"),(0,a.kt)("p",null,"NX plugins are installed via NPM. A list of community plugins can be found ",(0,a.kt)("a",{parentName:"p",href:"https://nx.dev/community#create-nx-plugin"},"here"),".",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"$ npm i @nrwl/node")),(0,a.kt)("p",null,"Once installed, plugins can be called via the nx CLI tool.",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"$ nx generate @nrwl/node:app my-app")),(0,a.kt)("h3",{id:"building-an-app"},"Building an app"),(0,a.kt)("p",null,"Apps can be built by running this command from the monorepo root:",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"$ nx build myapp")),(0,a.kt)("p",null,"All built files are put into the ",(0,a.kt)("inlineCode",{parentName:"p"},"dist")," folder in the root of the monorepo."))}u.isMDXComponent=!0}}]);
"use strict";(self.webpackChunklearnings=self.webpackChunklearnings||[]).push([[3417],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),m=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=m(a),g=n,h=u["".concat(s,".").concat(g)]||u[g]||c[g]||i;return a?r.createElement(h,o(o({ref:t},p),{},{components:a})):r.createElement(h,o({ref:t},p))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var m=2;m<i;m++)o[m]=a[m];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},489:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var r=a(7462),n=(a(7294),a(3905));const i={slug:"2022-10-25-programmatically-managing-prisma-models",title:"Programmatically managing Prisma models",authors:"jharrison",tags:["live","prisma","ast","schema","database","typescript"]},o=void 0,l={permalink:"/blog/2022-10-25-programmatically-managing-prisma-models",editUrl:"https://github.com/jharrisonio/jharrisonio.github.io/tree/master/blog/2022-10-25-programmatically-managing-prisma-models/index.md",source:"@site/blog/2022-10-25-programmatically-managing-prisma-models/index.md",title:"Programmatically managing Prisma models",description:"I've woken up early this morning because I'm excited to try out something I found yesterday; a library for manipulating the Prisma schema file via code.",date:"2022-10-25T00:00:00.000Z",formattedDate:"October 25, 2022",tags:[{label:"live",permalink:"/blog/tags/live"},{label:"prisma",permalink:"/blog/tags/prisma"},{label:"ast",permalink:"/blog/tags/ast"},{label:"schema",permalink:"/blog/tags/schema"},{label:"database",permalink:"/blog/tags/database"},{label:"typescript",permalink:"/blog/tags/typescript"}],readingTime:4.32,hasTruncateMarker:!0,authors:[{name:"James Harrison",title:"Solution Architect",url:"https://jharrison.io",imageURL:"https://github.com/jharrisonio.png",key:"jharrison"}],frontMatter:{slug:"2022-10-25-programmatically-managing-prisma-models",title:"Programmatically managing Prisma models",authors:"jharrison",tags:["live","prisma","ast","schema","database","typescript"]},nextItem:{title:"Writing a cold outreach email",permalink:"/blog/2022-10-24-writing-cold-outreach-email"}},s={authorsImageUrls:[void 0]},m=[],p={toc:m};function c(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"I've woken up early this morning because I'm excited to try out something I found yesterday; a library for manipulating the Prisma schema file via code."),(0,n.kt)("p",null,"Why is this exciting? I'm working on a side project to automate the entire build of a web app, and that includes creating, modifying and deleting data models using Prisma. But it needs to be done programmatically. Usually I would use the ",(0,n.kt)("a",{parentName:"p",href:"/solutions/js-ts/ts-compiler"},"Typescript Compiler")," to read the AST and manipulate it that way, but the Prisma schema file isn't Typescript, or Javascript. It's a proprietary format, which rules out this option."),(0,n.kt)("p",null,"Prisma has an ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/prisma/prisma/tree/main/packages/internals"},"internals")," library which has some functionality for this, but it's undocumented and looks difficult to work with. There's also a third party lib called ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/MrLeebo/prisma-ast"},"prisma-ast"),". Let's explore both these options."))}c.isMDXComponent=!0}}]);
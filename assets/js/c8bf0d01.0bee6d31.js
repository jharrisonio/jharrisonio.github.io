"use strict";(self.webpackChunklearnings=self.webpackChunklearnings||[]).push([[8460],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(n),d=i,h=m["".concat(c,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(h,a(a({ref:t},u),{},{components:n})):r.createElement(h,a({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7802:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7462),i=(n(7294),n(3905));const o={},a="Multiple Git accounts on a single machine",s={unversionedId:"general/multiple-git-accounts",id:"general/multiple-git-accounts",title:"Multiple Git accounts on a single machine",description:"Occasionally there is a need to authenticate to Github or Bitbucket with different user accounts for different repos. For example, work versus personal accounts.",source:"@site/solutions/general/multiple-git-accounts.md",sourceDirName:"general",slug:"/general/multiple-git-accounts",permalink:"/solutions/general/multiple-git-accounts",draft:!1,editUrl:"https://github.com/jharrisonio/jharrisonio.github.io/tree/master/solutions/general/multiple-git-accounts.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Abstract Syntax Trees - AST",permalink:"/solutions/general/abstract-syntax-trees"},next:{title:"Quickstart: React Project",permalink:"/solutions/js-ts/react-quickstart"}},c={},l=[{value:"Testing",id:"testing",level:3}],u={toc:l};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"multiple-git-accounts-on-a-single-machine"},"Multiple Git accounts on a single machine"),(0,i.kt)("p",null,"Occasionally there is a need to authenticate to Github or Bitbucket with different user accounts for different repos. For example, work versus personal accounts."),(0,i.kt)("p",null,"This can be achieved as simply as editing your SSH config at ",(0,i.kt)("inlineCode",{parentName:"p"},"~/.ssh/config")," as follows."),(0,i.kt)("p",null,"Using Github as an example, the following setup would allow two different users to connect by using different hostnames for each account, e.g. ",(0,i.kt)("inlineCode",{parentName:"p"},"github.com")," for personal and ",(0,i.kt)("inlineCode",{parentName:"p"},"work.github.com"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"Host me.github.com\n    HostName github.com\n    PreferredAuthentications publickey\n    IdentityFile /path/to/your/.ssh/private-key\n    UseKeychain yes\n    AddKeysToAgent yes\n\nHost work.github.com\n    HostName github.com\n    PreferredAuthentications publickey\n    IdentityFile /path/to/your/.ssh/work-private-key\n    UseKeychain yes\n    AddKeysToAgent yes\n")),(0,i.kt)("h3",{id:"testing"},"Testing"),(0,i.kt)("p",null,"To test everything is working properly, run these commands:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"$ ssh -vT git@github.com")),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"$ ssh-vT git@work.github.com")),(0,i.kt)("p",null,"Check that each command authenticates with the correct credentials. Below is an example output that shows authentication was made with user ",(0,i.kt)("inlineCode",{parentName:"p"},"jharrisonio"),". "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"...\ndebug1: client_input_channel_req: channel 0 rtype exit-status reply 0\nHi jharrisonio! You've successfully authenticated, but GitHub does not provide shell access.\ndebug1: channel 0: free: client-session, nchannels 1\nTransferred: sent 3188, received 3120 bytes, in 0.2 seconds\nBytes per second: sent 15774.7, received 15438.2\ndebug1: Exit status 1\n")))}p.isMDXComponent=!0}}]);
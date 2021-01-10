(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{102:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return l}));var n=r(3),o=r(7),a=(r(0),r(108)),i={title:"Overview of InternBit Reviews",sidebar_label:"Overview"},s={unversionedId:"developers/review/overview",id:"developers/review/overview",isDocsHomePage:!1,title:"Overview of InternBit Reviews",description:"Motivation",source:"@site/docs/developers/review/overview.md",slug:"/developers/review/overview",permalink:"/documentation/docs/developers/review/overview",version:"current",lastUpdatedBy:"Philip Johnson",lastUpdatedAt:1610308262,sidebar_label:"Overview",sidebar:"someSidebar",previous:{title:"Testing Checklist",permalink:"/documentation/docs/developers/checklists/testing-checklist"},next:{title:"Review Process",permalink:"/documentation/docs/developers/review/review-process"}},c=[{value:"Motivation",id:"motivation",children:[]},{value:"Process",id:"process",children:[]}],p={toc:c};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"motivation"},"Motivation"),Object(a.b)("p",null,"Reviews serve several purposes:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"Improve the quality of the codebase.")," We want to ensure that there are no obvious violations of Javascript best practices (as we understand them at the time of the review).")),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"Improve the consistency of the codebase."),' In some cases, are several competing "best practices", and so we want to ensure that the codebase observes the same one in all places.')),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"Provide a mechanism to onboard developers."),' New developers might be somewhat inexperienced with JS, React, and Semantic UI. InternBit is a somewhat complicated system.  It is unreasonable to expect developers to read through our documentation and instantly produce "perfect" code. Reviews are a way for more experienced developers to help new developers come up to speed as quickly as possible.')),Object(a.b)("li",{parentName:"ol"},Object(a.b)("p",{parentName:"li"},Object(a.b)("strong",{parentName:"p"},"Capture additional or modify existing best practices, design patterns, and anti-patterns.")," Reviews are also the best time for developers to reconsider existing coding and design standards, or propose new ones. This is because when you are doing a review, you are not trying to implement new functionality, and so your attention is focused on how existing code works and whether that is the most appropriate way to do it. Our existing best practices, design patterns, design anti-patterns and checklists are always a work in progress and always subject to modification as we learn more."))),Object(a.b)("h2",{id:"process"},"Process"),Object(a.b)("p",null,"In a nutshell, reviews have the following steps:"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},Object(a.b)("strong",{parentName:"li"},"Initiation:")," where the code to be reviewed is identified, and the review approach appropriate for the code is specified."),Object(a.b)("li",{parentName:"ol"},Object(a.b)("strong",{parentName:"li"},"Preparation:"),"  where developers read the code and document issues of concern."),Object(a.b)("li",{parentName:"ol"},Object(a.b)("strong",{parentName:"li"},"Meeting:")," where developers meet to talk through the code and the issues they have found with it, and decide how to resolve the issues."),Object(a.b)("li",{parentName:"ol"},Object(a.b)("strong",{parentName:"li"},"Resolution:")," where one or more developers carry out the actions decided upon during the meeting. This can involve both changes to the code base as well as changes to checklists and other review documentation.")))}l.isMDXComponent=!0},108:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return v}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=o.a.createContext({}),l=function(e){var t=o.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=l(e.components);return o.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(r),b=n,v=d["".concat(i,".").concat(b)]||d[b]||u[b]||a;return r?o.a.createElement(v,s(s({ref:t},p),{},{components:r})):o.a.createElement(v,s({ref:t},p))}));function v(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);
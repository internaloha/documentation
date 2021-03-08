(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{114:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return v}));var r=n(0),o=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),d=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=d(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=d(n),f=r,v=u["".concat(i,".").concat(f)]||u[f]||p[f]||c;return n?o.a.createElement(v,a(a({ref:t},l),{},{components:n})):o.a.createElement(v,a({ref:t},l))}));function v(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=f;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:r,i[1]=a;for(var l=2;l<c;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},99:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return a})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return d}));var r=n(3),o=n(7),c=(n(0),n(114)),i={title:"Overview of checklists",sidebar_label:"Overview"},a={unversionedId:"developers/checklists/overview",id:"developers/checklists/overview",isDocsHomePage:!1,title:"Overview of checklists",description:"The InternAloha codebase should conform to a number of conventions and best practices. While these evolve over time, we have discovered that it is very important to both document these conventions and best practices, and review both new and old code to check for compliance.  If we don't do this, then the code base quickly accumulates technical debt in the form of brittle and/or difficult to understand code.",source:"@site/docs/developers/checklists/overview.md",slug:"/developers/checklists/overview",permalink:"/documentation/docs/developers/checklists/overview",version:"current",lastUpdatedBy:"Philip Johnson",lastUpdatedAt:1610308262,sidebar_label:"Overview",sidebar:"someSidebar",previous:{title:"Site Management",permalink:"/documentation/docs/developers/site-management"},next:{title:"Design Checklist",permalink:"/documentation/docs/developers/checklists/design-checklist"}},s=[],l={toc:s};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"The InternAloha codebase should conform to a number of conventions and best practices. While these evolve over time, we have discovered that it is very important to both document these conventions and best practices, and review both new and old code to check for compliance.  If we don't do this, then the code base quickly accumulates technical debt in the form of brittle and/or difficult to understand code."),Object(c.b)("p",null,"This chapter contains a set of checklists that document our current set of conventions and best practices."))}d.isMDXComponent=!0}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{107:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(3),o=r(7),a=(r(0),r(114)),i={title:"Overview"},s={unversionedId:"developers/scrapers/overview",id:"developers/scrapers/overview",isDocsHomePage:!1,title:"Overview",description:"The goal of InternAloha scrapers is to collect information about computer science internships from as many online resources as possible.",source:"@site/docs\\developers\\scrapers\\overview.md",slug:"/developers/scrapers/overview",permalink:"/documentation/docs/developers/scrapers/overview",version:"current",lastUpdatedBy:"jhsuP",lastUpdatedAt:1614906104,sidebar:"someSidebar",previous:{title:"Tech Stack",permalink:"/documentation/docs/developers/tech-stack"},next:{title:"Install Scrapers",permalink:"/documentation/docs/developers/scrapers/installation"}},c=[],l={toc:c};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"The goal of InternAloha scrapers is to collect information about computer science internships from as many online resources as possible."),Object(a.b)("p",null,'Currently, this process is semi-automated.  On a regular basis, hopefully weekly, a member of the InternAloha team will invoke the scraper programs.  These programs collect information from various sites, and represent it in a "canonical" format.  '),Object(a.b)("p",null,"This format is made available to the InternAloha web application and used to display internship information to users."),Object(a.b)("p",null,"The process of collecting internship information cannot be completely automated for the following reasons:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"The format of internship sites changes regularly.  A developer must monitor the output for problems and make fixes.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Some sites contain recaptchas to prevent completely automated browsing. In this case, a developer must be on hand to prove the the user is not a robot."))))}p.isMDXComponent=!0},114:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(r),f=n,b=u["".concat(i,".").concat(f)]||u[f]||m[f]||a;return r?o.a.createElement(b,s(s({ref:t},l),{},{components:r})):o.a.createElement(b,s({ref:t},l))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);
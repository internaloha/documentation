(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{108:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var i=n(0),o=n.n(i);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),d=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=d(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},h=o.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=d(n),h=i,b=p["".concat(a,".").concat(h)]||p[h]||u[h]||r;return n?o.a.createElement(b,s(s({ref:t},l),{},{components:n})):o.a.createElement(b,s({ref:t},l))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<r;l++)a[l]=n[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},82:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return d}));var i=n(3),o=n(7),r=(n(0),n(108)),a={title:"Design Checklist",sidebar_label:"Design"},s={unversionedId:"developers/checklists/design-checklist",id:"developers/checklists/design-checklist",isDocsHomePage:!1,title:"Design Checklist",description:"Practices concerning the high-level design of functions that is not specific to React, Typescript, or Javascript.",source:"@site/docs\\developers\\checklists\\design-checklist.md",slug:"/developers/checklists/design-checklist",permalink:"/documentation/docs/developers/checklists/design-checklist",version:"current",lastUpdatedBy:"Philip Johnson",lastUpdatedAt:1610996529,sidebar_label:"Design",sidebar:"someSidebar",previous:{title:"Overview of checklists",permalink:"/documentation/docs/developers/checklists/overview"},next:{title:"Javascript and ESLint Checklist",permalink:"/documentation/docs/developers/checklists/js-eslint-checklist"}},c=[{value:"Design-01: Avoid deeply nested code.",id:"design-01-avoid-deeply-nested-code",children:[]},{value:"Design-02: Eliminate dead code.",id:"design-02-eliminate-dead-code",children:[]},{value:"Design-03: Eliminate large comment blocks.",id:"design-03-eliminate-large-comment-blocks",children:[]},{value:"Design-04: Ensure comments are appropriate.",id:"design-04-ensure-comments-are-appropriate",children:[]},{value:"Design-05: Ensure code is DRY.",id:"design-05-ensure-code-is-dry",children:[]},{value:"Design-06: Ensure reusable code is exported or made available in the appropriate place.",id:"design-06-ensure-reusable-code-is-exported-or-made-available-in-the-appropriate-place",children:[]},{value:"Design-07: Move unused files to internaloha/archive.",id:"design-07-move-unused-files-to-internalohaarchive",children:[]},{value:"Design-08: Modularize long code sections",id:"design-08-modularize-long-code-sections",children:[]}],l={toc:c};function d(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(i.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Practices concerning the high-level design of functions that is not specific to React, Typescript, or Javascript."),Object(r.b)("h3",{id:"design-01-avoid-deeply-nested-code"},"Design-01: Avoid deeply nested code."),Object(r.b)("p",null,"Try to avoid nesting code more than 5 levels (i.e. 10 spaces of indentation). For example, here is an outline of some recent code:"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{}),"function foo () {\n  try {\n    :\n    if () {\n      :\n      while () {\n        :\n        try {\n          :\n          try {\n            :\n            for () {\n              :\n              try {\n                // This code is indented 16 spaces!\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n")),Object(r.b)("p",null,"The solution is to refactor some of the nested code into separate function(s). This should make the code more readable."),Object(r.b)("h3",{id:"design-02-eliminate-dead-code"},"Design-02: Eliminate dead code."),Object(r.b)("p",null,"Is there unused/unreachable code?"),Object(r.b)("h3",{id:"design-03-eliminate-large-comment-blocks"},"Design-03: Eliminate large comment blocks."),Object(r.b)("p",null,"Is there a large amount of commented out code? If so, move it to the internaloha/archive/ directory."),Object(r.b)("h3",{id:"design-04-ensure-comments-are-appropriate"},"Design-04: Ensure comments are appropriate."),Object(r.b)("p",null,"Are there unnecessary comments? Comments that describe the ",Object(r.b)("em",{parentName:"p"},"how"),"? If so, eliminate them."),Object(r.b)("p",null,"Is there complex and/or unintuitive code? Please add a comment to explain the ",Object(r.b)("em",{parentName:"p"},"why"),"."),Object(r.b)("p",null,'If you see improvements that cannot be made immediately, add a comment prefaced by "TODO:".'),Object(r.b)("h3",{id:"design-05-ensure-code-is-dry"},"Design-05: Ensure code is DRY."),Object(r.b)("p",null,'Does the code conform to the Agile Maxim of "Do not Repeat Yourself"? The same code should not be repeated more than twice.'),Object(r.b)("p",null,"Note that this is true not only within a single file, but across all files of a system. For example, there is lots of repeated code in the various scraper files."),Object(r.b)("p",null,"Fix this by refactoring either within the file or moving code to a library file and importing it."),Object(r.b)("h3",{id:"design-06-ensure-reusable-code-is-exported-or-made-available-in-the-appropriate-place"},"Design-06: Ensure reusable code is exported or made available in the appropriate place."),Object(r.b)("p",null,"Are there reusable services, functions and components that are not made available for reuse? If so, please refactor them into a shared utilities file and export them."),Object(r.b)("p",null,"For example, here is a piece of code that is likely to be reuseable"),Object(r.b)("pre",null,Object(r.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),"  await fs.writeFileSync('./data/canonical/angellist.canonical.data.json', JSON.stringify(data, null, 4),\n      (err) => {\n        if (err) {\n          console.log(err);\n        }\n      });\n")),Object(r.b)("h3",{id:"design-07-move-unused-files-to-internalohaarchive"},"Design-07: Move unused files to internaloha/archive."),Object(r.b)("p",null,"In the event that a file is not in use or under active development (for example, a scraper that has been abandoned), move it to the internaloha/archive directory. That way the code is still accessable in case we want to look at it later, but not in the active code base which is confusing."),Object(r.b)("h3",{id:"design-08-modularize-long-code-sections"},"Design-08: Modularize long code sections"),Object(r.b)("p",null,"Avoid loops with bodies that are many (i.e. 100*) lines long.  Avoid functions with bodies that are many (i.e. 100+) lines long. Avoid try-catch blocks with bodies that are many (i.e. 100+) lines long."),Object(r.b)("p",null,"In these cases, try to extract functions that accomplish focused tasks and call a sequence of them instead. That should make the code easier to read."))}d.isMDXComponent=!0}}]);
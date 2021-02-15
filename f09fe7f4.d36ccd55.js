(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{108:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),d=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=d(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=d(n),u=a,h=p["".concat(i,".").concat(u)]||p[u]||b[u]||o;return n?r.a.createElement(h,s(s({ref:t},l),{},{components:n})):r.a.createElement(h,s({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},99:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return l}));var a=n(3),r=(n(0),n(108));const o={title:"Javascript and ESLint Checklist",sidebar_label:"JS, ESLint"},i={unversionedId:"developers/checklists/js-eslint-checklist",id:"developers/checklists/js-eslint-checklist",isDocsHomePage:!1,title:"Javascript and ESLint Checklist",description:"Javascript and ESLint best practices.",source:"@site/docs\\developers\\checklists\\js-eslint-checklist.md",slug:"/developers/checklists/js-eslint-checklist",permalink:"/documentation/docs/developers/checklists/js-eslint-checklist",version:"current",lastUpdatedBy:"Philip Johnson",lastUpdatedAt:1611344227,sidebar_label:"JS, ESLint",sidebar:"someSidebar",previous:{title:"Design Checklist",permalink:"/documentation/docs/developers/checklists/design-checklist"},next:{title:"React Checklist",permalink:"/documentation/docs/developers/checklists/react-checklist"}},s=[{value:"Javascript",id:"javascript",children:[{value:"JS-00: Indentation and whitespace",id:"js-00-indentation-and-whitespace",children:[]},{value:"JS-01: Name classes, components, files, and directories appropriately.",id:"js-01-name-classes-components-files-and-directories-appropriately",children:[]},{value:"JS-02: Avoid lodash map, filter, etc.",id:"js-02-avoid-lodash-map-filter-etc",children:[]},{value:"JS-03: Avoid console.log",id:"js-03-avoid-consolelog",children:[]},{value:"JS-04: Avoid Immediately Invoked Async Function Expressions",id:"js-04-avoid-immediately-invoked-async-function-expressions",children:[]},{value:"JS-05: Conserve editor window real estate.",id:"js-05-conserve-editor-window-real-estate",children:[]},{value:"JS-06: Don&#39;t use try-catch for control flow",id:"js-06-dont-use-try-catch-for-control-flow",children:[]},{value:"JS-07: Prefer ternary operator",id:"js-07-prefer-ternary-operator",children:[]}]},{value:"ESLint",id:"eslint",children:[{value:"ESLINT-01: No errors, avoid warnings.",id:"eslint-01-no-errors-avoid-warnings",children:[]},{value:"ESLINT-02: Consider modifying our standards.",id:"eslint-02-consider-modifying-our-standards",children:[]}]}],c={toc:s};function l({components:e,...t}){return Object(r.b)("wrapper",Object(a.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Javascript and ESLint best practices."),Object(r.b)("h2",{id:"javascript"},"Javascript"),Object(r.b)("h3",{id:"js-00-indentation-and-whitespace"},"JS-00: Indentation and whitespace"),Object(r.b)("p",null,"We use two space indentation.  Please avoid all whitespace inside function bodies.  Use whitespace to separate functions."),Object(r.b)("p",null,"To delineate logical sections within a function, instead of using whitespace, use a //  comment. For example, see the main() function in ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/internaloha/internaloha/blob/master/scraper/scrapers/acm.js"}),"acm.js"),"."),Object(r.b)("h3",{id:"js-01-name-classes-components-files-and-directories-appropriately"},"JS-01: Name classes, components, files, and directories appropriately."),Object(r.b)("p",null,"Classes should be pascalcase starting with a capital letter."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Example: CourseInstance")),Object(r.b)("p",null,"React components should be pascalcase starting with a capital letter."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Example: AcademicView")),Object(r.b)("p",null,"Functions and arrow functions should be camelcase starting with a lowercase letter."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Example: findUser")),Object(r.b)("p",null,"Filenames for classes, scrapers, and React components should follow the rules for the classes or components."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Example: AcademicView.tsx, Acm.js, Apple.js, ZipRecruiter.js")),Object(r.b)("p",null,"Filenames for helpers should be lowercase with dashes between words. These files should be in a utilities directory."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Example: ui/pages/utilities/explorer-helpers.ts")),Object(r.b)("p",null,'Filenames for scraper data should be lowercase, with dashes as necessary for multi-word files.  Periods used to create "categories" of files (i.e. "canonical", "parsed", etc.'),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Example: apple.canonical.data.json. i-hire-tech.canonical.data.json, usa-cities.json.")),Object(r.b)("p",null,"Directory names are lowercase with dashes between words."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Example: ui/components/students/item-view")),Object(r.b)("h3",{id:"js-02-avoid-lodash-map-filter-etc"},"JS-02: Avoid lodash map, filter, etc."),Object(r.b)("p",null,"ES6 includes many of the lodash functions. Use the built-in function rather than the lodash version when possible."),Object(r.b)("h3",{id:"js-03-avoid-consolelog"},"JS-03: Avoid console.log"),Object(r.b)("p",null,"Console.log is useful for certain situations in development. All console.log statements should be commented out in master."),Object(r.b)("p",null,"We should consider adopting a lightweight logging package such as ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.npmjs.com/package/js-logger"}),"js-logger"),". That way we can toggle log messages in and out as needed."),Object(r.b)("h3",{id:"js-04-avoid-immediately-invoked-async-function-expressions"},"JS-04: Avoid Immediately Invoked Async Function Expressions"),Object(r.b)("p",null,"Some scrapers contain code like this:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"(async () => {\n  try {\n    await playTest('https://angel.co/login');\n\n  } catch (err) {\n    console.log('Our Error: ', err.message);\n  }\n  //process.exit(1);\n})();\n")),Object(r.b)("p",null,'The effect of this code is to define a function and immediately invoke it.  This is a little hard for new JS developers to understand. Replace with a more simple approach that defines a "main" function and invokes it:'),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"async function main() {\n try {\n     await playTest('https://angel.co/login');\n\n   } catch (err) {\n     console.log('Our Error: ', err.message);\n   }\n   //process.exit(1);\n }\n}\nmain();\n")),Object(r.b)("p",null,"For more information, see ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://2ality.com/2016/10/async-function-tips.html#immediately-invoked-async-function-expressions"}),"IIAFE"),"."),Object(r.b)("h3",{id:"js-05-conserve-editor-window-real-estate"},"JS-05: Conserve editor window real estate."),Object(r.b)("p",null,"When there is no loss of readability, put code on a single line."),Object(r.b)("p",null,"For example, objects as parameters can often be collapsed onto a single line. For example, the following four lines of code:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"await page.setViewport({\n  width: 1050,\n  height: 800,\n});\n")),Object(r.b)("p",null,"can be reduced to a single link of code, which is just as readable (if not more readable):"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"await page.setViewport({ width: 1050, height: 800 });\n")),Object(r.b)("h3",{id:"js-06-dont-use-try-catch-for-control-flow"},"JS-06: Don't use try-catch for control flow"),Object(r.b)("p",null,"Throwning exceptions should be reserved for error conditions, not as a way to perform control flow. For example:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"let nextPage = true;\nwhile (nextPage === true) {\n  try {\n    await page.waitForSelector('div[class=\"mux-search-results\"]');\n    await page.click('a[id=\"loadMoreJobs\"]');\n  } catch (e2) {\n    nextPage = false;\n  }\n}\n")),Object(r.b)("p",null,"This loop requires an error to be thrown.  Instead, check to see if the relevant link exists and set nextPage accordingly. Here's some pseudocode:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"while (page.selectorExists('a[id=\"loadMoreJobs\"]') {\n  await page.waitForSelector('div[class=\"mux-search-results\"]');\n  await page.click('a[id=\"loadMoreJobs\"]');\n}\n")),Object(r.b)("h3",{id:"js-07-prefer-ternary-operator"},"JS-07: Prefer ternary operator"),Object(r.b)("p",null,"If you see code like this:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"const foo;\nif (bar === 12) {\n  foo = 'bar';\n} else {\n  foo = 'baz';\n}\n")),Object(r.b)("p",null,"Please rewrite these six lines of code into one:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"const foo = (bar === 12) ? 'bar' : 'baz';\n")),Object(r.b)("h2",{id:"eslint"},"ESLint"),Object(r.b)("h3",{id:"eslint-01-no-errors-avoid-warnings"},"ESLINT-01: No errors, avoid warnings."),Object(r.b)("p",null,"Are there ESLint errors or warnings that should be removed?"),Object(r.b)("h3",{id:"eslint-02-consider-modifying-our-standards"},"ESLINT-02: Consider modifying our standards."),Object(r.b)("p",null,"Based upon your review of code, should we be modifying the set of ESLint rules?"))}l.isMDXComponent=!0}}]);
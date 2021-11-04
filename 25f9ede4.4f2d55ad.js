(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{104:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=o.a.createContext({}),p=function(e){var t=o.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),m=n,b=u["".concat(i,".").concat(m)]||u[m]||d[m]||a;return r?o.a.createElement(b,l(l({ref:t},c),{},{components:r})):o.a.createElement(b,l({ref:t},c))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},77:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return u}));var n=r(3),o=r(7),a=(r(0),r(104)),i=["components"],l={title:"Implementation"},s={unversionedId:"developers/implementation",id:"developers/implementation",isDocsHomePage:!1,title:"Implementation",description:"Review existing implementations",source:"@site/docs/developers/implementation.md",slug:"/developers/implementation",permalink:"/documentation/docs/developers/implementation",version:"current",sidebar:"someSidebar",previous:{title:"Invocation",permalink:"/documentation/docs/developers/invocation"},next:{title:"Production",permalink:"/documentation/docs/developers/production"}},c=[{value:"Review existing implementations",id:"review-existing-implementations",children:[]},{value:"Copy the template",id:"copy-the-template",children:[]},{value:"Add your scraper to the CLI",id:"add-your-scraper-to-the-cli",children:[]},{value:"Implement the behavior",id:"implement-the-behavior",children:[]}],p={toc:c};function u(e){var t=e.components,r=Object(o.a)(e,i);return Object(a.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"review-existing-implementations"},"Review existing implementations"),Object(a.b)("p",null,"Before starting to implement your own scraper, check to make sure that you can run the NSF scraper successfully in your own environment. I suggest you read through the ",Object(a.b)("inlineCode",{parentName:"p"},"Scraper.ts")," and ",Object(a.b)("inlineCode",{parentName:"p"},"Scraper.nsf.ts")," files and make sure you understand the superclass and subclass relationship.  Notice how the NSF scraper methods frequently call the superclass method initially, then augment this behavior with additional code."),Object(a.b)("h2",{id:"copy-the-template"},"Copy the template"),Object(a.b)("p",null,"Next, make a copy of ",Object(a.b)("inlineCode",{parentName:"p"},"scrapers/Scraper.template.ts"),", and replace 'template' by the name of your scraper. So, for example, ",Object(a.b)("inlineCode",{parentName:"p"},"Scraper.glassdoor.ts"),". Edit the file as follows:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},'Fix the class name (for example, to "GlassDoorScraper")'),Object(a.b)("li",{parentName:"ul"},"Fix the name field on line 7 from 'template' to your scraper name (for example, to 'glassdoor'). Keep the scraper name lower case, all one word, no hyphens. This will make it easier for the CLI.")),Object(a.b)("h2",{id:"add-your-scraper-to-the-cli"},"Add your scraper to the CLI"),Object(a.b)("p",null,"Next, update ",Object(a.b)("inlineCode",{parentName:"p"},"main.ts")," so that the CLI knows about your scraper. Edit the file as follows:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Add an import of your new scraper (for example, ",Object(a.b)("inlineCode",{parentName:"li"},"import { GlassDoorScraper } from './scrapers/Scraper.glassdoor';"),")"),Object(a.b)("li",{parentName:"ul"},"Update the ",Object(a.b)("inlineCode",{parentName:"li"},"scrapers")," object definition to include a new field and value for your scraper. For example, ",Object(a.b)("inlineCode",{parentName:"li"},"glassdoor: new GlassDoorScraper(),"))),Object(a.b)("p",null,"Next, test the CLI to see if it understands your scraper. For example:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"npm run scrape -- -s glassdoor -l debug\n")),Object(a.b)("p",null,"You should get a few lines of output and no errors."),Object(a.b)("h2",{id:"implement-the-behavior"},"Implement the behavior"),Object(a.b)("p",null,'Finally, the "easy" part. Migrate the scraper code from the old version of the system into this new format.  There are some CLI options to help you, such as ',Object(a.b)("inlineCode",{parentName:"p"},"--no-headless"),", ",Object(a.b)("inlineCode",{parentName:"p"},"--devtools"),", ",Object(a.b)("inlineCode",{parentName:"p"},"--slowmo"),", and so forth."),Object(a.b)("p",null,"Check out the nsf scraper for hints.  There is some code (such as the array spread operator) which works in the old version of the system, but which I had to replace with a call to forEach in version 2 since the new version uses Typescript.  If you run into difficulties where code works in the old version but not here and you can't figure it out, don't hesitate to ask for help."),Object(a.b)("p",null,"To see if your scraper is working, compare the output file it writes into the listings directory to the output file in scraper/data/canonical. Note that there are a few fields (start, end, compensation, qualifications, skills, remote) that are not currently of interest.  Use the type definition of the Listing object to see what fields we are currently hoping to extract."),Object(a.b)("p",null,"Make sure that your code passes lint:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"npm run lint\n")))}u.isMDXComponent=!0}}]);
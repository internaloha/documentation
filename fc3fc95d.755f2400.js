(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{94:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return u})),n.d(t,"default",(function(){return l}));var o=n(3),i=n(7),a=(n(0),n(99)),r=["components"],s={title:"How to manage this site",sidebar_label:"Manage this site"},c={unversionedId:"documentation/manage-this-site",id:"documentation/manage-this-site",isDocsHomePage:!1,title:"How to manage this site",description:"This site is implemented using Docusaurus 2. Here is an abbreviated guide to writing documentation for this site.",source:"@site/docs/documentation/manage-this-site.md",slug:"/documentation/manage-this-site",permalink:"/documentation/docs/documentation/manage-this-site",version:"current",lastUpdatedBy:"Philip Johnson",lastUpdatedAt:1610909939,sidebar_label:"Manage this site",sidebar:"someSidebar",previous:{title:"Run Scrapers",permalink:"/documentation/docs/developers/scrapers/running"},next:{title:"How to write markdown",permalink:"/documentation/docs/documentation/write-markdown"}},u=[{value:"Installation and invocation",id:"installation-and-invocation",children:[]},{value:"Writing documentation",id:"writing-documentation",children:[]},{value:"Adding your new documentation to the sidebar",id:"adding-your-new-documentation-to-the-sidebar",children:[]},{value:"Adding images",id:"adding-images",children:[]},{value:"Publishing the site and committing changes",id:"publishing-the-site-and-committing-changes",children:[]},{value:"Advanced usage",id:"advanced-usage",children:[]}],d={toc:u};function l(e){var t=e.components,n=Object(i.a)(e,r);return Object(a.b)("wrapper",Object(o.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"This site is implemented using ",Object(a.b)("a",{parentName:"p",href:"http://v2.docusaurus.io"},"Docusaurus 2"),". Here is an abbreviated guide to writing documentation for this site."),Object(a.b)("h2",{id:"installation-and-invocation"},"Installation and invocation"),Object(a.b)("p",null,"You will want to create a local installation of this site in order to develop your documentation."),Object(a.b)("p",null,"First, you must have commit/push privileges to internaloha/internaloha.github.io and internaloha/documentation repositories on GitHub.  You can obtain those privileges from Philip Johnson."),Object(a.b)("p",null,"Next, download the ",Object(a.b)("a",{parentName:"p",href:"https://github.com/internaloha/documentation"},"InternAloha documentation repository"),"."),Object(a.b)("p",null,"Next, cd into the documentation directory and invoke ",Object(a.b)("inlineCode",{parentName:"p"},"npm install"),"."),Object(a.b)("p",null,"To bring up the site locally, invoke ",Object(a.b)("inlineCode",{parentName:"p"},"npm start"),"."),Object(a.b)("p",null,"You should see the site appear at http://localhost:3000."),Object(a.b)("h2",{id:"writing-documentation"},"Writing documentation"),Object(a.b)("p",null,"To write documentation, you should create or modify the files in the docs/ directory.  The docs/ directory contains a set of *.md files organized into subdirectories."),Object(a.b)("p",null,"The subdirectory organization mirrors the sidebar organization."),Object(a.b)("p",null,"The easiest way to get started is to copy an existing markdown file that seems to contain the kind of markdown you need to use, and then edit it to provide the needed documentation."),Object(a.b)("p",null,"Here are some issues to be aware of:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Each entry in the sidebar corresponds to a single file name. If you want your documentation to appear as multiple entries in the sidebar, then you must create multiple documentation markdown files.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},'Docusaurus creates a "secondary sidebar" on the right side of the page that essentially provides a table of contents for that page.  This enables rather lengthy top-level documentation files.')),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"The docusaurus runtime environment regenerates the documentation each time it notices a file change. So, you can save out your file and the browser page should be refreshed automatically. Note that changes to docusaurus.config.js require you to exit and restart docusaurus to pick up the changes."))),Object(a.b)("h2",{id:"adding-your-new-documentation-to-the-sidebar"},"Adding your new documentation to the sidebar"),Object(a.b)("p",null,"As soon as you start writing your documentation, you'll want to add an entry to the sidebar so that you can easily navigate to it. To do this, edit the sidebars.js file. Just add the name of your file to the appropriate array of file name strings in the appropriate place."),Object(a.b)("h2",{id:"adding-images"},"Adding images"),Object(a.b)("p",null,"If you want to add images, you should first add the image file to the ",Object(a.b)("inlineCode",{parentName:"p"},"static/img")," directory.  Feel free to create a new subdirectory to hold your images if you feel that is appropriate. Then, you can insert your image using something like:"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'<img src="/img/Profiles.png"/>\n')),Object(a.b)("h2",{id:"publishing-the-site-and-committing-changes"},"Publishing the site and committing changes"),Object(a.b)("p",null,"Once your documentation is just exactly perfect, you'll want to publish your changes."),Object(a.b)("p",null,"To do this, make sure GIT_USER is set, then run ",Object(a.b)("inlineCode",{parentName:"p"},"npm run deploy"),". For more information, see ",Object(a.b)("a",{parentName:"p",href:"https://v2.docusaurus.io/docs/deployment#deploying-to-github-pages"},"Deploying to GitHub Pages"),"."),Object(a.b)("p",null,"This does not commit your changes to the source files, so be sure to do that after deploying the site."),Object(a.b)("h2",{id:"advanced-usage"},"Advanced usage"),Object(a.b)("p",null,"If you want to do more advanced changes to the website, you'll probably want to consult the ",Object(a.b)("a",{parentName:"p",href:"https://v2.docusaurus.io/docs/introduction"},"docusaurus2 documentation"),"."))}l.isMDXComponent=!0},99:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var o=n(0),i=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),d=function(e){var t=i.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=d(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},b=i.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,r=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=d(n),b=o,m=l["".concat(r,".").concat(b)]||l[b]||p[b]||a;return n?i.a.createElement(m,s(s({ref:t},u),{},{components:n})):i.a.createElement(m,s({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=b;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var u=2;u<a;u++)r[u]=n[u];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{108:function(e,t,r){"use strict";r.d(t,"a",(function(){return h})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),p=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},h=function(e){var t=p(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),h=p(r),d=n,b=h["".concat(a,".").concat(d)]||h[d]||u[d]||i;return r?o.a.createElement(b,s(s({ref:t},l),{},{components:r})):o.a.createElement(b,s({ref:t},l))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var l=2;l<i;l++)a[l]=r[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},85:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return p}));var n=r(3),o=r(7),i=(r(0),r(108)),a={title:"Review Process"},s={unversionedId:"developers/review/review-process",id:"developers/review/review-process",isDocsHomePage:!1,title:"Review Process",description:"Here is our current process for performing a review.",source:"@site/docs/developers/review/review-process.md",slug:"/developers/review/review-process",permalink:"/documentation/docs/developers/review/review-process",version:"current",sidebar:"someSidebar",previous:{title:"Overview of InternBit Reviews",permalink:"/documentation/docs/developers/review/overview"},next:{title:"Overview",permalink:"/documentation/docs/developers/ui/overview"}},c=[{value:"1. Initiation Phase",id:"1-initiation-phase",children:[]},{value:"2. Preparation Phase",id:"2-preparation-phase",children:[]},{value:"3. Meeting Phase",id:"3-meeting-phase",children:[]},{value:"4. Resolution Phase",id:"4-resolution-phase",children:[]}],l={toc:c};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Here is our current process for performing a review."),Object(i.b)("h2",{id:"1-initiation-phase"},"1. Initiation Phase"),Object(i.b)("p",null,"This phase sets up a review. It begins with a developer identifying some code to be reviewed.  The amount of code to be reviewed should be small enough that developers can review it in an hour or two maxiumum."),Object(i.b)("p",null,'The developer then creates a new issue to describe the review task. The issue is named "Review: (Subject)", where "(Subject)" describes the page or file or collections etc to be reviewed.'),Object(i.b)("p",null,"The body of the issue contains the following:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The files and/or user interface pages to be reviewed."),Object(i.b)("li",{parentName:"ul"},"The ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"../checklists/overview"}),"checklists")," to be used."),Object(i.b)("li",{parentName:"ul"},"The date and time of the review meeting."),Object(i.b)("li",{parentName:"ul"},"Any high-level goals for the review. Perhaps the developer is concerned about some specific issue with the code.")),Object(i.b)("p",null,'After creating the issue, the developer should then create a branch called "review-XXX", where XXX is the issue number. (This is just like our normal issue/branch naming convention.) It is helpful to edit the issue to provide links to the files under review within that new branch.'),Object(i.b)("p",null,'Once the issue and branch are set up, then the issue can be moved to "In progress" on the Project Board, and developers can be assigned to that issue.  Unlike other tasks, reviews are normally assigned to most or all of the RadGrad developers.'),Object(i.b)("h2",{id:"2-preparation-phase"},"2. Preparation Phase"),Object(i.b)("p",null,"During the preparation phase, developers go through the code and/or user interface pages and look for issues according to the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"../checklists/overview"}),"checklists")," and/or developer provided instructions."),Object(i.b)("p",null,"Developers record their issues in a private text document that is not shared with others.  This enables everyone to review the code without preconceived notions from seeing other developer's issues."),Object(i.b)("p",null,"Documenting an issue involves specifying the file (or UI page), the line number, a checklist item ID, and potentially some short text to provide additional clarification if necessary."),Object(i.b)("p",null,"The preparation phase generally lasts from three days to a week, depending upon what else is going on. As noted above, we don't expect developers to spend more than an hour or so on preparation."),Object(i.b)("h2",{id:"3-meeting-phase"},"3. Meeting Phase"),Object(i.b)("p",null,"The meeting begins with each developer adding a comment to the issue, which is a copy-and-paste of their private notes developed during the preparation phase. This is the first time that the entire group sees each other's comments."),Object(i.b)("p",null,'The group then decides on one person to be the "scribe". The scribe checks out the review branch from GitHub, opens up the code in IntelliJ, and starts a Code With Me session. For details on Code With Me, please see the ',Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.jetbrains.com/help/idea/code-with-me.html"}),"IntelliJ Code With Me Documentation"),". All participants join the Code With Me session so that everyone can be seeing the code in the same way, and help the scribe to update the code with comments as the review proceeds."),Object(i.b)("p",null,"The review meeting involves going through each of the comments and deciding how to resolve them. There are two basic kinds of resolution:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},'Create or update a "Technical Debt" comment at the top of the file.  This comment provides a description of what is wrong with the code in the file so that future developers do not use this code as a model for their own development. However, the problems are not urgent enough to warrant immediate action.')),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Create one or more new Issues specifying things to be fixed in the near future. In the case of problems that should be addressed in the near future, new Issue(s) are created specifying the work to be done."))),Object(i.b)("h2",{id:"4-resolution-phase"},"4. Resolution Phase"),Object(i.b)("p",null,"The immediate changes are scheduled for implementation as Issues."),Object(i.b)("p",null,"One or more developers make changes to the checklists or review process guidelines that are documented as a review issue, and commit the updated materials to publish them."))}p.isMDXComponent=!0}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{114:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),u=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=u(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(a),d=r,m=p["".concat(o,".").concat(d)]||p[d]||b[d]||i;return a?n.a.createElement(m,c(c({ref:t},l),{},{components:a})):n.a.createElement(m,c({ref:t},l))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=a[l];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},88:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return u}));var r=a(3),n=a(7),i=(a(0),a(114)),o={title:"Tech Stack"},c={unversionedId:"developers/tech-stack",id:"developers/tech-stack",isDocsHomePage:!1,title:"Tech Stack",description:"Here are the major components of the InternAloha tech stack, with reference materials and activities to help you come up to speed if necessary.",source:"@site/docs\\developers\\tech-stack.md",slug:"/developers/tech-stack",permalink:"/documentation/docs/developers/tech-stack",version:"current",lastUpdatedBy:"Philip Johnson",lastUpdatedAt:1610048145,sidebar:"someSidebar",previous:{title:"Overview",permalink:"/documentation/docs/developers/overview"},next:{title:"Overview",permalink:"/documentation/docs/developers/scrapers/overview"}},s=[{value:"Discord",id:"discord",children:[]},{value:"IntelliJ IDEA editor",id:"intellij-idea-editor",children:[]},{value:"GitHub and GitHub Desktop",id:"github-and-github-desktop",children:[]},{value:"Javascript",id:"javascript",children:[]},{value:"React and Semantic UI",id:"react-and-semantic-ui",children:[]},{value:"Uniforms",id:"uniforms",children:[]},{value:"Issue Driven Project Management",id:"issue-driven-project-management",children:[]}],l={toc:s};function u(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Here are the major components of the InternAloha tech stack, with reference materials and activities to help you come up to speed if necessary."),Object(i.b)("p",null,"Becoming fluent with the InternAloha Tech Stack is ",Object(i.b)("strong",{parentName:"p"},"Job Number One")," as a new developer.  For some new developers, it might require several weeks of working through the materials below before they are ready to actually start working on the code base.  That's totally OK: the time invested here will always pay off in higher efficiency and quality of work later on."),Object(i.b)("h2",{id:"discord"},"Discord"),Object(i.b)("p",null,"We use Discord as a primary communication mechanism. (During COVID, it has become our ",Object(i.b)("em",{parentName:"p"},"exclusive")," communication method!)"),Object(i.b)("p",null,"If you are not already a member of the Discord server, please request an invite."),Object(i.b)("h2",{id:"intellij-idea-editor"},"IntelliJ IDEA editor"),Object(i.b)("p",null,"We require all developers in the Project to use the IntelliJ IDEA editor.  Although you might prefer another editor, IntelliJ IDEA has a unique combination of features for Javascript, Typescript, and Meteor that make it better suited than any other editor for this project."),Object(i.b)("p",null,'We understand that you might not like IntelliJ, but this is non-negotiable for participating in the Project.  We have prior experience with students using other editors "on the sly", only to have them run into problems and difficulties that resulted directly from them not using IntelliJ.'),Object(i.b)("p",null,"For information on configuring IntelliJ for Meteor development, see:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"http://courses.ics.hawaii.edu/ics314f19/morea/development-environments/experience-install-intellij-idea.html"}),"ICS 314: Install IntelliJ IDEA"))),Object(i.b)("h2",{id:"github-and-github-desktop"},"GitHub and GitHub Desktop"),Object(i.b)("p",null,"We use git and GitHub to manage the codebase.  If you are not familiar, please review:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"http://courses.ics.hawaii.edu/ics314f20/modules/configuration-management/"}),"Configuration Management"))),Object(i.b)("p",null,"Even if you consider yourself experienced with git, please use ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://desktop.github.com/"}),"GitHub Desktop")," for this project. GitHub Desktop will prevent you from doing embarrassing things.  It will be even more embarrassing if you do something embarrassing, and then we find out you ignored this instruction to use GitHub Desktop."),Object(i.b)("p",null,"In the RadGrad project, we do not perform rebasing, or use submodules, or any git trickery."),Object(i.b)("p",null,"You will be committing directly to the radgrad/radgrad2 repository. If you do not yet have write privileges, please ask Philip or Cam to grant you these permissions."),Object(i.b)("p",null,"To assess your knowledge, please use GitHub Desktop to clone the radgrad/radgrad2 repo to your local computer."),Object(i.b)("h2",{id:"javascript"},"Javascript"),Object(i.b)("p",null,"Javascript is the primary language used for development."),Object(i.b)("p",null,"For information on Javascript, please review the following:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"http://courses.ics.hawaii.edu/ics314f20/modules/javascript-1/"}),"JS 1: Basics")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"http://courses.ics.hawaii.edu/ics314f20/modules/javascript-2/"}),"JS 2: Object Orientation"),","),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"http://courses.ics.hawaii.edu/ics314f20/modules/javascript-3/"}),"JS 3: Functional Programming"),".")),Object(i.b)("p",null,"To assess your knowledge, you should be able to easily complete exercises such as:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"http://courses.ics.hawaii.edu/ics314f20/morea/javascript-2/experience-jamba-juice-1.html"}),"Jamba Juice 1")," (and subsequent)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"http://courses.ics.hawaii.edu/ics314f20/morea/javascript-3/experience-underscore-2.html"}),"UH Degree Data Manipulation"))),Object(i.b)("h2",{id:"react-and-semantic-ui"},"React and Semantic UI"),Object(i.b)("p",null,"InternAloha uses the Semantic UI CSS framework in combination with React.  If you are not familiar, please review:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"http://courses.ics.hawaii.edu/ics314f20/modules/ui-frameworks/"}),"Semantic UI")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"http://courses.ics.hawaii.edu/ics314f20/modules/react/"}),"React"))),Object(i.b)("p",null,"To assess your knowledge, please complete an exercise such as:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"http://courses.ics.hawaii.edu/ics314f20/morea/react/experience-islandsnow-react.html"}),"Island Snow in React"))),Object(i.b)("h2",{id:"uniforms"},"Uniforms"),Object(i.b)("p",null,"For form display, validation, and processing, we use ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://uniforms.tools/"}),"Uniforms"),"."),Object(i.b)("p",null,"To assess your knowledge, complete the Digits application as indicated in the next section."),Object(i.b)("h2",{id:"issue-driven-project-management"},"Issue Driven Project Management"),Object(i.b)("p",null,"We coordinate development using a process called Issue Driven Project Management (IDPM). To learn about it, please review:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"http://courses.ics.hawaii.edu/ics314f20/modules/project-management/"}),"Agile Project Management"))),Object(i.b)("p",null,"Note that IDPM constrains: (a) the way issues are defined, created, and managed; (b) the way branches are defined, named, and managed, and (c) the way group members partition work."),Object(i.b)("p",null,"To assess your knowledge, please review the:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/internaloha/internaloha/projects"}),"Active Project Boards"))))}u.isMDXComponent=!0}}]);
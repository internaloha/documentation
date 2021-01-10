(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{108:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=i.a.createContext({}),c=function(e){var t=i.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=r,h=p["".concat(o,".").concat(d)]||p[d]||b[d]||a;return n?i.a.createElement(h,s(s({ref:t},u),{},{components:n})):i.a.createElement(h,s({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var u=2;u<a;u++)o[u]=n[u];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},78:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return c}));var r=n(3),i=n(7),a=(n(0),n(108)),o={title:"InternBit Evaluation",sidebar_label:"Evaluation"},s={unversionedId:"overview/evaluation",id:"overview/evaluation",isDocsHomePage:!1,title:"InternBit Evaluation",description:"We will evaluate InternBit in two ways.  In Back-End Evaluation, we will evaluate how well InternBit is able to extract information from the Internet about Internships. In Front-End Evaluation, we will evaluate how well InternBit satisfies the needs of students who are searching for an Internship.",source:"@site/docs/overview/evaluation.md",slug:"/overview/evaluation",permalink:"/documentation/docs/overview/evaluation",version:"current",sidebar_label:"Evaluation",sidebar:"someSidebar",previous:{title:"InternBit Needs Assessment",permalink:"/documentation/docs/overview/needs-assessment"},next:{title:"Overview",permalink:"/documentation/docs/developers/overview"}},l=[{value:"Back-End Evaluation",id:"back-end-evaluation",children:[]},{value:"Front-End Evaluation",id:"front-end-evaluation",children:[]}],u={toc:l};function c(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"We will evaluate InternBit in two ways.  In Back-End Evaluation, we will evaluate how well InternBit is able to extract information from the Internet about Internships. In Front-End Evaluation, we will evaluate how well InternBit satisfies the needs of students who are searching for an Internship."),Object(a.b)("h2",{id:"back-end-evaluation"},"Back-End Evaluation"),Object(a.b)("p",null,"Evaluating the ability of InternBit to extract information from the Internet involves answer the following questions:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Does InternBit get data from all known internship sites for CS students?  Which sites does it not yet extract information from?")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"For each site not monitored by InternBit, how many internship listings are lost? (In other words, how many internships appear on the site that do not appear to be listed on any site monitored by InternBit.)")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"For each site monitored by InternBit, what percentage of the interesting listings does it extract?")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"How good is the parsing of each site monitored by InternBit? Does it find all of the canonical\nfields (when available)?"))),Object(a.b)("p",null,"Back-End Evaluation does not involve user interface or user experience evaluation.  That is the task of front-end evaluation."),Object(a.b)("p",null,"The Back-End evaluation process simply requires answering the above questions."),Object(a.b)("h2",{id:"front-end-evaluation"},"Front-End Evaluation"),Object(a.b)("p",null,"Evaluating the ability of InternBit to address the needs of students seeking internships involves answering the following questions:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Can InternBit lower the time required for students to search for internships, and create a\nhigher success rate for students seeking internships?")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Do students find that InternBit improves the internship search process? If so, how? If not, why\nnot? How could InternBit provide more support for the internship search process?")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Do students find the InternBit easy to navigate? What could be improved?")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Does the information regarding student internships from InternBit provide valuable feedback\ntowards the ICS program at UH?"))),Object(a.b)("p",null,"To answer these questions, a functioning InternBit system must be implemented with an appropriate user interface. Then, a select set of students will be chosen to use the system. Afterwards, they will be asked to answer the following questions regarding their experience using the system:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"What aspects of the site did you like the most?"),Object(a.b)("li",{parentName:"ul"},"What aspects of the site were confusing?"),Object(a.b)("li",{parentName:"ul"},"How would you improve this site?"),Object(a.b)("li",{parentName:"ul"},"Would you recommend using this site to others? If yes, why? If not, why not?"),Object(a.b)("li",{parentName:"ul"},"Are there any additional features that you would like us to implement?"),Object(a.b)("li",{parentName:"ul"},"Compared to other internship sites, how would you compare InternBit?"),Object(a.b)("li",{parentName:"ul"},"Are there any other sites that you use to find internships that InternBit does not get data from?"),Object(a.b)("li",{parentName:"ul"},"What is your estimate of the ratio of interesting vs uninteresting listings pulled from each site?")),Object(a.b)("p",null,"It will also be useful to obtain faculty and advisor opinions of the system.  We can ask faculty/advisors to use the system, then ask them the following questions:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Do you think the information provided by InternBit is valuable?"),Object(a.b)("li",{parentName:"ul"},"Does InternBit provide information that helps assess whether students are qualified/feel qualified for internships?"),Object(a.b)("li",{parentName:"ul"},"Do you feel that InternBit recommends internships that students are qualified for?"),Object(a.b)("li",{parentName:"ul"},"Are there any improvements that could be made to assess the skill level of students?")))}c.isMDXComponent=!0}}]);
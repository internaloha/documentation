(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{104:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),i=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=i.a.createContext({}),p=function(e){var t=i.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},h=i.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=p(n),h=r,m=u["".concat(o,".").concat(h)]||u[h]||d[h]||a;return n?i.a.createElement(m,s(s({ref:t},l),{},{components:n})):i.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},87:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(3),i=n(7),a=(n(0),n(104)),o=["components"],s={title:"Motivation"},c={unversionedId:"overview/motivation",id:"overview/motivation",isDocsHomePage:!1,title:"Motivation",description:"Overview",source:"@site/docs/overview/motivation.md",slug:"/overview/motivation",permalink:"/documentation/docs/overview/motivation",version:"current",lastUpdatedBy:"Philip Johnson",lastUpdatedAt:1636057796,sidebar:"someSidebar",next:{title:"InternAloha Needs Assessment",permalink:"/documentation/docs/overview/needs-assessment"}},l=[{value:"Overview",id:"overview",children:[]},{value:"Barriers",id:"barriers",children:[]},{value:"Goals",id:"goals",children:[]}],p={toc:l};function u(e){var t=e.components,n=Object(i.a)(e,o);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"overview"},"Overview"),Object(a.b)("p",null,'The InternAloha project results from student feedback regarding our original implementation of "Internship" opportunities in RadGrad.  Previous versions of RadGrad could only provide information about a relatively small number of "curated" local internships, since each opportunity must be manually entered into the system by a faculty member, advisor, or administrator. After deployment, use, and evaluation of RadGrad, we discovered that our current support for internships does not meet the needs of students, but could be augmented to provide a more scalable and efficient solution.'),Object(a.b)("p",null,"InternAloha is our response to these findings. InternAloha is an automated system for collecting internship listings from a variety of public sites and making them available within RadGrad."),Object(a.b)("h2",{id:"barriers"},"Barriers"),Object(a.b)("p",null,"There are two significant barriers for undergraduates who wish to pursue internship programs."),Object(a.b)("p",null,"First, there are many online sites providing information about internships, including: LinkedIn.com, Glassdoor.com, Internships.com, InternMatch.com, YouTern.com, Idealist.org, CoolWorks.com, Indeed.com, ZipRecruiter.com, SimplyHired.com, Careershift.com, USAJobs.gov, Experience.com, Handshake.com, StudentOpportunityCenter.com, and of course the NSF REU Site Directory.  Each of these vary in their filtering, search, and recommendation mechanisms. In addition to these online repositories, but just as important, there can be many high quality internships with local small businesses who simply contact the University directly.  For example, during the six months from September 2019 - February 2020, University of Hawaii computer science students received 35 emails regarding local internship opportunities from our departmental undergraduate mailing list."),Object(a.b)("p",null,"Second, this plethora of access points means that students complain about spending many fruitless hours searching for an internship that is compatible with their skills and interests. Ultimately, the internship search process is a constraint satisfaction problem: which internships is the student qualified for? Which ones reflect their interests? Which ones satisfy geographical or financial constraints?  Can the student complete the application prior to the deadline? Intriguingly, the internship search process can yield interesting information for future use, including a better understanding of what qualifications the student should acquire in order to qualify for an internship in the future."),Object(a.b)("p",null,"An insight from the RadGrad project is that RadGrad already collects several key pieces of information about the student that can be useful to the internship search process: for example, their grade level, their approximate GPA, their interests, and (based on their courses and extracurricular activities) their skills (such as how many years of programming experience, their programming languages, etc). The InternAloha project seeks ways to exploit the information in RadGrad, along with a Hawaii-first orientation, to provide a superior Internship search experience for students."),Object(a.b)("h2",{id:"goals"},"Goals"),Object(a.b)("p",null,"The goals for this project include:"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Design, implement, and evaluate a crawler.")," The crawler visits online internship sites, parse internship listings to extract key details such as application deadline, interest areas, and application requirements, and store these results. We expect to design custom parsing routines for each online site in order to take advantage of any structural consistencies in the presentation of internship information. We will develop a corpus of training pages that we will use to evaluate the parsing algorithms."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Design, implement, and evaluate a recommendation engine.")," The recommendation engine queries the aggregated internship database using RadGrad data about a student and return relevant internship opportunities."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Design, implement, and evaluate a company UI.")," The company UI enables one-off entry of internships, such as those associated with local companies where the crawler approach is not appropriate."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Design, implement, and evaluate a student UI.")," The student UI enables students to see the internship profile extracted from their RadGrad data, modify and correct it as necessary, and then request that the engine send them notifications of relevant internships as they become available. The student UI should also provide a way for students to give feedback on the quality of the recommendations, which can yield further information about issues with the parsing process."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Design and implement an evaluation of the overall effectiveness of the system.")," We will investigate two primary research questions in this project: (1) Does InternAloha improve the ability of students to find internships of interest?  We can test this hypothesis via an experiment where students first look for internships unaided by the system, then use the system to see if they uncover additional internships. The occurrence of either false positives or false negatives can provide insight into the capability of the system.  (2) Does InternAloha change the behavior of students with respect to their degree experience? This is the more fundamental goal: by decreasing the ``friction'' for finding internships of interest, do students learn about requirements earlier in their degree program, and plan to acquire the necessary skills as part of their degree experience?"))}u.isMDXComponent=!0}}]);
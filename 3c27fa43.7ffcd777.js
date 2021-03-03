(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{114:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),p=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},o=function(e){var t=p(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),o=p(n),u=a,m=o["".concat(l,".").concat(u)]||o[u]||d[u]||i;return n?r.a.createElement(m,c(c({ref:t},b),{},{components:n})):r.a.createElement(m,c({ref:t},b))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var b=2;b<i;b++)l[b]=n[b];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},77:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),i=(n(0),n(114)),l={title:"Install Scrapers"},c={unversionedId:"developers/installation/install-scrapers",id:"developers/installation/install-scrapers",isDocsHomePage:!1,title:"Install Scrapers",description:"Here is how to install the InternAloha scrapers for development and how to run them and integrate the results into the UI.",source:"@site/docs/developers/installation/install-scrapers.md",slug:"/developers/installation/install-scrapers",permalink:"/documentation/docs/developers/installation/install-scrapers",version:"current",lastUpdatedBy:"Philip Johnson",lastUpdatedAt:1611426903},s=[{value:"Install scrapers",id:"install-scrapers",children:[]},{value:"Running a scraper",id:"running-a-scraper",children:[]},{value:"Parsing scraped data for display",id:"parsing-scraped-data-for-display",children:[{value:"npm run multi-parse",id:"npm-run-multi-parse",children:[]},{value:"npm run single-parse",id:"npm-run-single-parse",children:[]},{value:"npm run statistics",id:"npm-run-statistics",children:[]}]},{value:"Scraper script details",id:"scraper-script-details",children:[{value:"SimplyHired",id:"simplyhired",children:[]},{value:"Idealist",id:"idealist",children:[]},{value:"Internships (Chegg)",id:"internships-chegg",children:[]},{value:"Monsters.com",id:"monsterscom",children:[]},{value:"LinkedIn",id:"linkedin",children:[]},{value:"StackOverflow",id:"stackoverflow",children:[]}]},{value:"Creating a new scraper",id:"creating-a-new-scraper",children:[]}],b={toc:s};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("a",{href:"https://github.com/internaloha/internaloha/actions?query=workflow%3Ainternaloha-scrapers"},Object(i.b)("img",{src:"https://github.com/internaloha/internaloha/workflows/internaloha-scrapers/badge.svg"})),Object(i.b)("p",null,"Here is how to install the InternAloha scrapers for development and how to run them and integrate the results into the UI."),Object(i.b)("h2",{id:"install-scrapers"},"Install scrapers"),Object(i.b)("p",null,"To install the system, first ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.npmjs.com/get-npm"}),"install NPM"),", then checkout ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/internaloha/internaloha"}),"InternAloha")," from GitHub."),Object(i.b)("p",null,"Next, cd into internaloha\\scraper\\scrapers and run ",Object(i.b)("inlineCode",{parentName:"p"},"npm install"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),'$ npm install\nnpm WARN @reach/router@1.3.4 requires a peer of react@15.x || 16.x || 16.4.0-alpha.0911da3 but none is installed\n. You must install peer dependencies yourself.\nnpm WARN @reach/router@1.3.4 requires a peer of react-dom@15.x || 16.x || 16.4.0-alpha.0911da3 but none is insta\nlled. You must install peer dependencies yourself.\nnpm WARN @testing-library/user-event@7.2.1 requires a peer of @testing-library/dom@>=5 but none is installed. Yo\nu must install peer dependencies yourself.\nnpm WARN create-react-context@0.3.0 requires a peer of react@^0.14.0 || ^15.0.0 || ^16.0.0 but none is installed\n. You must install peer dependencies yourself.\nnpm WARN eslint-config-airbnb@18.2.0 requires a peer of eslint-plugin-react@^7.20.0 but none is installed. You m\nust install peer dependencies yourself.\nnpm WARN eslint-config-airbnb@18.2.0 requires a peer of eslint-plugin-react-hooks@^4 || ^3 || ^2.3.0 || ^1.7.0 b\nut none is installed. You must install peer dependencies yourself.\nnpm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.1.3 (node_modules\\fsevents):\nnpm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.1.3: wanted {"os":"darwin","ar\nch":"any"} (current: {"os":"win32","arch":"x64"})\nnpm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.13 (node_modules\\watchpack-chokidar2\\node_modules\\f\nsevents):\nnpm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.13: wanted {"os":"darwin","a\nrch":"any"} (current: {"os":"win32","arch":"x64"})\n\naudited 774 packages in 3.257s\n\n40 packages are looking for funding\n  run `npm fund` for details\n\nfound 0 vulnerabilities\n')),Object(i.b)("p",null,"It should now be possible to run the various scraper scripts within the /scrapers directory."),Object(i.b)("h2",{id:"running-a-scraper"},"Running a scraper"),Object(i.b)("p",null,"To run a scraper, invoke an npm script:"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Script"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Site"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Notes"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"npm run acm")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"https://jobs.acm.org"}),"https://jobs.acm.org")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"npm run aexpress")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"https://jobs.americanexpress.com/jobs"}),"https://jobs.americanexpress.com/jobs")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"npm run angellist")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"https://angel.co/"}),"https://angel.co/")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Login required")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"npm run apple")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"https://jobs.apple.com"}),"https://jobs.apple.com")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"npm run glassdoor")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"https://www.glassdoor.com"}),"https://www.glassdoor.com")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"npm run ihiretechnology")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"https://www.ihiretechnology.com"}),"https://www.ihiretechnology.com")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"npm run idealist computer science")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"https://www.idealist.org"}),"https://www.idealist.org")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Search term required")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"npm run indeed")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"https://www.indeed.com"}),"https://www.indeed.com")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"npm run linkedin")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"https://www.linkedin.com/jobs"}),"https://www.linkedin.com/jobs")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"npm run monster computer science")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"https://www.monster.com"}),"https://www.monster.com")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Search term required")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"npm run simply computer science")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"https://www.simplyhired.com/"}),"https://www.simplyhired.com/")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Search term required")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"npm run stackoverflow")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"https://stackoverflow.com/jobs"}),"https://stackoverflow.com/jobs")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("inlineCode",{parentName:"td"},"npm run zip")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(i.b)("a",Object(a.a)({parentName:"td"},{href:"https://www.ziprecruiter.com/"}),"https://www.ziprecruiter.com/")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:null}))))),Object(i.b)("p",null,"In order to run a scraper, cd into \\scrapers and invoke the desired script. For example, running the scraper for LinkedIn is as follows:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"$ npm run linkedin\n")),Object(i.b)("p",null,"This should bring up a Chromium window that will start the scraping process. After fully scraping a website, the results can be found within the \\scraper\\data\\canonical folder."),Object(i.b)("h2",{id:"parsing-scraped-data-for-display"},"Parsing scraped data for display"),Object(i.b)("h3",{id:"npm-run-multi-parse"},"npm run multi-parse"),Object(i.b)("p",null,"All newly scraped data must be parsed using ",Object(i.b)("inlineCode",{parentName:"p"},"npm run multi-parse")," to convert it into a form appropriate for display in the website. This script goes through the data and extracts relevant information about skills, qualifications, compensation, and start/end date for each internship posting. It also ensures that each file is in the correct format. Results are stored in ",Object(i.b)("inlineCode",{parentName:"p"},"/src/src/data")," and statistics are updated."),Object(i.b)("h3",{id:"npm-run-single-parse"},"npm run single-parse"),Object(i.b)("p",null,"Extracts relevant information about skills, qualifications, compensation, and start/end date for\na single file. At the moment, you must change the variables to parse the file you want:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"const rawData = fs.readFileSync('./data/canonical/angellist.canonical.data.json');\nconst text = JSON.parse(rawData);\n...\nfs.writeFile('data/parsed/angellist.parsed.data.json',\n   JSON.stringify(text, null, 4), 'utf-8',\n   err => (err ? console.log('\\nData not written!', err) :\n       console.log('\\nData successfully written!')));\n")),Object(i.b)("h3",{id:"npm-run-statistics"},"npm run statistics"),Object(i.b)("p",null,"This script creates a file containing relevant information about each site that was scraped. The numbers correspond to how many fields were ",Object(i.b)("strong",{parentName:"p"},"not")," empty."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "site": "Total",\n  "lastScraped": "2020-09-04T00:45:30.335Z",\n  "entries": 3286,\n  "position": 3284,\n  "company": 3284,\n  "contact": 417,\n  "location": 3286,\n  "posted": 2772,\n  "due": 93,\n  "start": 98,\n  "end": 0,\n  "compensation": 811,\n  "qualifications": 1295,\n  "skills": 3240,\n  "description": 3284\n}\n')),Object(i.b)("p",null,"You have to manually add any new site so its statistics are generated."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"const zipData = readFile('./data/parsed/ziprecruiter.parsed.data.json');\nconst simplyData = readFile('./data/parsed/simplyhired.parsed.data.json');\n\nlet data = [];\ndata = _.concat(zipData, simplyData);\ndata = _.concat(data, cheggData);\n\nstatistics.push(\n    getStatistics('Glassdoor', glassData),\n    getStatistics('Indeed', indeedData),\n    getStatistics('Total', data),\n)\n...\n")),Object(i.b)("h2",{id:"scraper-script-details"},"Scraper script details"),Object(i.b)("h3",{id:"simplyhired"},"SimplyHired"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"npm run simply [search query]"),". For example:  ",Object(i.b)("inlineCode",{parentName:"p"},"npm run simply computer science"),"."),Object(i.b)("p",null,"Result from the run is available at: ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/radgrad/internbit/blob/master/src/scrapers/data/canonical/simplyHired.canonical.data.json"}),"simplyHiredData.json")),Object(i.b)("p",null,"Current filters:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Date Relevance: 10 days"),Object(i.b)("li",{parentName:"ul"},"Any distance")),Object(i.b)("h3",{id:"idealist"},"Idealist"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"npm run idealist [search query]")),Object(i.b)("p",null,"Result from the run is available at: ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/radgrad/internbit/blob/master/src/scrapers/data/canonical/idealist.canonical.data.json"}),"simplyHiredData.json")),Object(i.b)("h3",{id:"internships-chegg"},"Internships (Chegg)"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"npm run internships [search query]")),Object(i.b)("p",null,"Result from the run is available\nat: ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/radgrad/internbit/blob/master/src/scrapers/data/canonical/internships.canonical.data.json"}),"internships.data.json")),Object(i.b)("p",null,"Notes:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"At the moment it doesn't work because of the reCATPCHA issue."),Object(i.b)("li",{parentName:"ul"},"Unfortunately, ",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.internships.com/app/search"}),"internships.com")," uses infinite scroll. Each internship doesn't have an associated URL link (like zipRecruiter) to its page so I have to click back and forth between the the listing and the main search page so it is slow. It takes roughly ~20 minutes to scrape 250 listings."),Object(i.b)("li",{parentName:"ul"},"Current filters:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Hawaii"),Object(i.b)("li",{parentName:"ul"},"Sorted by Date")))),Object(i.b)("h3",{id:"monsterscom"},"Monsters.com"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"npm run monster [search query]"),". For example:  ",Object(i.b)("inlineCode",{parentName:"p"},"npm run monster computer science intern")),Object(i.b)("p",null,"Results from the run is available at: ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/radgrad/internbit/blob/master/src/scrapers/data/canonical/monster.canonical.data.json"}),"monster.data.json")),Object(i.b)("p",null,"Current filters:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Only show jobs posted within last 30 days")),Object(i.b)("h3",{id:"linkedin"},"LinkedIn"),Object(i.b)("p",null,"Run ",Object(i.b)("inlineCode",{parentName:"p"},"npm run linkedin")," to start the script."),Object(i.b)("p",null,"Result from the run is available at: ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/radgrad/internbit/blob/master/src/scrapers/data/canonical/linkedin.canonical.data.json"}),"linkedin.data.json")),Object(i.b)("p",null,"Filters:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Only shows internships listed within last 30 days"),Object(i.b)("li",{parentName:"ul"},"Only show those listed as internships"),Object(i.b)("li",{parentName:"ul"},"Sorted by last posted")),Object(i.b)("h3",{id:"stackoverflow"},"StackOverflow"),Object(i.b)("p",null,"Run ",Object(i.b)("inlineCode",{parentName:"p"},"npm run stackoverflow")," to start the script."),Object(i.b)("p",null,"Result from the run is available at: ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/radgrad/internbit/blob/master/src/scrapers/data/canonical/stackoverflow.canonical.data.json"}),"stackoverflow.data.json")),Object(i.b)("h2",{id:"creating-a-new-scraper"},"Creating a new scraper"),Object(i.b)("p",null,"InternAloha uses puppeteer to direct through an instance of a website in order to scrap a website. A video to understand the basics of puppeteer and website scraping can be seen ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://youtu.be/IvaJ5n5xFqU"}),"here"),"."),Object(i.b)("p",null,"A couple of functions were implemented to simplify scraper code and is recommended to use to keep consistent coding: ",Object(i.b)("inlineCode",{parentName:"p"},"fetchInfo")," and ",Object(i.b)("inlineCode",{parentName:"p"},"autoScroll")," located at /scrapers/scraperFunction.js"))}p.isMDXComponent=!0}}]);
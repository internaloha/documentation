(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{107:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),b=p(n),d=a,m=b["".concat(i,".").concat(d)]||b[d]||u[d]||s;return n?r.a.createElement(m,l(l({ref:t},c),{},{components:n})):r.a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,i=new Array(s);i[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<s;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},76:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),s=(n(0),n(107)),i={title:"Install Scrapers"},l={unversionedId:"developers/installation/install-scrapers",id:"developers/installation/install-scrapers",isDocsHomePage:!1,title:"Install Scrapers",description:"Here is how to install the InternAloha scrapers for development and how to run them and integrate the results into the UI.",source:"@site/docs/developers/installation/install-scrapers.md",slug:"/developers/installation/install-scrapers",permalink:"/documentation/docs/developers/installation/install-scrapers",version:"current",lastUpdatedBy:"ruizaj",lastUpdatedAt:1610524648,sidebar:"someSidebar",previous:{title:"Tech Stack",permalink:"/documentation/docs/developers/tech-stack"},next:{title:"Install UI",permalink:"/documentation/docs/developers/installation/install-ui"}},o=[{value:"How to Install Scrapers",id:"how-to-install-scrapers",children:[]},{value:"Running A Scraper",id:"running-a-scraper",children:[]},{value:"Displaying Scraped Data to Website UI",id:"displaying-scraped-data-to-website-ui",children:[]},{value:"Current Scrapers",id:"current-scrapers",children:[]},{value:"Building A Scraper",id:"building-a-scraper",children:[]}],c={toc:o};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(s.b)("wrapper",Object(a.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Here is how to install the InternAloha scrapers for development and how to run them and integrate the results into the UI."),Object(s.b)("h2",{id:"how-to-install-scrapers"},"How to Install Scrapers"),Object(s.b)("p",null,"To install the system, first ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.npmjs.com/get-npm"}),"install NPM"),"."),Object(s.b)("p",null,"Using a newly created repository, cd into \\scraper\\scrapers and run ",Object(s.b)("inlineCode",{parentName:"p"},"npm install")," to download the correct libraries the scrapers' ",Object(s.b)("inlineCode",{parentName:"p"},"package.json")," file. "),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{}),'C:\\Users\\ajrui\\OneDrive\\Documents\\GitHub\\internaloha\\scraper\\scrapers>npm install\nnpm WARN @reach/router@1.3.4 requires a peer of react@15.x || 16.x || 16.4.0-alpha.0911da3 but none is installed\n. You must install peer dependencies yourself.\nnpm WARN @reach/router@1.3.4 requires a peer of react-dom@15.x || 16.x || 16.4.0-alpha.0911da3 but none is insta\nlled. You must install peer dependencies yourself.\nnpm WARN @testing-library/user-event@7.2.1 requires a peer of @testing-library/dom@>=5 but none is installed. Yo\nu must install peer dependencies yourself.\nnpm WARN create-react-context@0.3.0 requires a peer of react@^0.14.0 || ^15.0.0 || ^16.0.0 but none is installed\n. You must install peer dependencies yourself.\nnpm WARN eslint-config-airbnb@18.2.0 requires a peer of eslint-plugin-react@^7.20.0 but none is installed. You m\nust install peer dependencies yourself.\nnpm WARN eslint-config-airbnb@18.2.0 requires a peer of eslint-plugin-react-hooks@^4 || ^3 || ^2.3.0 || ^1.7.0 b\nut none is installed. You must install peer dependencies yourself.\nnpm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.1.3 (node_modules\\fsevents):\nnpm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.1.3: wanted {"os":"darwin","ar\nch":"any"} (current: {"os":"win32","arch":"x64"})\nnpm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.13 (node_modules\\watchpack-chokidar2\\node_modules\\f\nsevents):\nnpm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.13: wanted {"os":"darwin","a\nrch":"any"} (current: {"os":"win32","arch":"x64"})\n\naudited 774 packages in 3.257s\n\n40 packages are looking for funding\n  run `npm fund` for details\n\nfound 0 vulnerabilities\n')),Object(s.b)("p",null,"If done correctly, it should be possible to run the various scraper scripts within the /scrapers directory."),Object(s.b)("h2",{id:"running-a-scraper"},"Running A Scraper"),Object(s.b)("p",null,"Different scripts for each scraper can be found within the ",Object(s.b)("inlineCode",{parentName:"p"},"package.json")," file under ",Object(s.b)("inlineCode",{parentName:"p"},"scraper")," folder. "),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{}),'\n"scripts": {\n    "test": "node test.js",\n    "eject": "react-scripts eject",\n    "lint": "eslint --quiet --ext .jsx --ext .js ./src",\n    "statistics": "node scrapers/statistics.js",\n    "internships": "node scrapers/internships.js",\n    "simply": "node scrapers/simplyHired.js",\n    "zip": "node scrapers/zipRecruiter.js",\n    "idealist": "node scrapers/idealist.js",\n    "indeed": "node scrapers/indeed.js",\n    "monster": "node scrapers/monster.js",\n    "linkedin": "node scrapers/linkedin.js",\n    "single-parse": "node scrapers/single_parser.js",\n    "youtern": "node scrapers/Youtern.js",\n    "cool": "node scrapers/Cooworks.js",\n    "stackoverflow": "node scrapers/stackoverflow.js",\n    "glassdoor": "node scrapers/Glassdoor.js",\n    "ihire": "node scrapers/iHireTechnology.js",\n    "angellist": "node scrapers/angellist.js",\n    "acm": "node scrapers/acm.js",\n    "coolworks": "node scrapers/Coolworks.js",\n    "aexpress": "node scrapers/aexpress.js",\n    "hn": "node scrapers/hn.js",\n    "apple": "node scrapers/apple.js",\n    "multi-parse": "node scrapers/multi_parser.js && node scrapers/statistics.js"\n  },\n  \n')),Object(s.b)("p",null,"In order to run a scraper, cd into \\scrapers and ",Object(s.b)("inlineCode",{parentName:"p"},"npm run -script title-")," "),Object(s.b)("p",null,"For example, running the scraper for LinkedIn is as follows:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{}),"\nC:\\Users\\ajrui\\OneDrive\\Documents\\GitHub\\internaloha\\scraper\\scrapers>npm run linkedin\n\n")),Object(s.b)("p",null,"This should bring up a Chromium window that will start the scraping process. After fully scraping a website, the results can be found within the \\scraper\\data\\canonical folder"),Object(s.b)("h2",{id:"displaying-scraped-data-to-website-ui"},"Displaying Scraped Data to Website UI"),Object(s.b)("p",null,"All newly scraped data must be parsed using ",Object(s.b)("inlineCode",{parentName:"p"},"npm run multi-parse")," to transfer into the website database. This script goes through all canonical data and uses NLP/Regex to extract relevant information about skills, qualifications, compensation, and start/end date for each internship posting. It also ensures that each file is the correct format so it does not break the site. Once it is done, the new files are saved under ",Object(s.b)("inlineCode",{parentName:"p"},"/src/src/data")," and statistics are updated.  "),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Single-Parse:")," ",Object(s.b)("inlineCode",{parentName:"p"},"npm run single-parse"),"\nExtracts relevant information about skills, qualifications, compensation, and start/end date for\na single file. At the moment, you must change the variables to parse the file you want:"),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx",metastring:"harmony",harmony:!0}),"const rawData = fs.readFileSync('./data/canonical/angellist.canonical.data.json');\nconst text = JSON.parse(rawData);\n...\nfs.writeFile('data/parsed/angellist.parsed.data.json',\n   JSON.stringify(text, null, 4), 'utf-8',\n   err => (err ? console.log('\\nData not written!', err) :\n       console.log('\\nData successfully written!')));\n")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Statistics:")," ",Object(s.b)("inlineCode",{parentName:"p"},"npm run statistics"),"\nThis script provides relevant information about each site that was scraped. The numbers\ncorrespond to how many fields were ",Object(s.b)("strong",{parentName:"p"},"not")," empty. "),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "site": "Total",\n  "lastScraped": "2020-09-04T00:45:30.335Z",\n  "entries": 3286,\n  "position": 3284,\n  "company": 3284,\n  "contact": 417,\n  "location": 3286,\n  "posted": 2772,\n  "due": 93,\n  "start": 98,\n  "end": 0,\n  "compensation": 811,\n  "qualifications": 1295,\n  "skills": 3240,\n  "description": 3284\n}\n')),Object(s.b)("p",null,"You have to manually add the newly listed site\nso its statistics are generated.   "),Object(s.b)("pre",null,Object(s.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"const zipData = readFile('./data/parsed/ziprecruiter.parsed.data.json');\nconst simplyData = readFile('./data/parsed/simplyhired.parsed.data.json');\n\nlet data = [];\ndata = _.concat(zipData, simplyData);\ndata = _.concat(data, cheggData);\n\nstatistics.push(\n    getStatistics('Glassdoor', glassData),\n    getStatistics('Indeed', indeedData),\n    getStatistics('Total', data),\n)\n...\n")),Object(s.b)("h2",{id:"current-scrapers"},"Current Scrapers"),Object(s.b)("p",null,"The following scrapers require a search query parameter (Eg. ",Object(s.b)("inlineCode",{parentName:"p"},"npm run simply computer science"),"): "),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"SimplyHired"),Object(s.b)("li",{parentName:"ul"},"Internships (Chegg)"),Object(s.b)("li",{parentName:"ul"},"Monsters.com"),Object(s.b)("li",{parentName:"ul"},"Idealist")),Object(s.b)("p",null,"The following scrapers do not require any parameters:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Glassdoor"),Object(s.b)("li",{parentName:"ul"},"Stackoverflow"),Object(s.b)("li",{parentName:"ul"},"LinkedIn"),Object(s.b)("li",{parentName:"ul"},"YouTern"),Object(s.b)("li",{parentName:"ul"},"iHireTechnology"),Object(s.b)("li",{parentName:"ul"},"Indeed"),Object(s.b)("li",{parentName:"ul"},"AmericanExpress"),Object(s.b)("li",{parentName:"ul"},"ACM"),Object(s.b)("li",{parentName:"ul"},"Apple"),Object(s.b)("li",{parentName:"ul"},"Coolworks")),Object(s.b)("p",null,"The following scrapers require login in parameters:"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"AngelList")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"SimplyHired:")," "),Object(s.b)("p",null," ",Object(s.b)("inlineCode",{parentName:"p"},"npm run simply [search query]"),". For example:  ",Object(s.b)("inlineCode",{parentName:"p"},"npm run simply computer\n science"),". Result from the run is available at: ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/radgrad/internbit/blob/master/src/scrapers/data/canonical/simplyHired.canonical.data.json"}),"simplyHiredData.json")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Current filters:",Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"Date Relevance: 10 days"),Object(s.b)("li",{parentName:"ul"},"Any distance")))),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Idealist:")),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"npm run idealist [search query]"),". Result from the run is available at: ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/radgrad/internbit/blob/master/src/scrapers/data/canonical/idealist.canonical.data.json"}),"simplyHiredData.json")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Internships (Chegg):")," "),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"npm run internships [search query]"),".  Result from the run is available\nat: ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/radgrad/internbit/blob/master/src/scrapers/data/canonical/internships.canonical.data.json"}),"internships.data.json")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"At the moment it doesn't work because of the reCATPCHA issue")),Object(s.b)("li",{parentName:"ul"},"Unfortunately, ",Object(s.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.internships.com/app/search"}),"internships.com")," uses infinite scroll. Each internship\ndoesn't have an associated URL link (like zipRecruiter) to its page so I have to click back and\nforth between the the listing and the main search page so it is slow. It takes roughly ~20\nminutes to scrape 250 listings."),Object(s.b)("li",{parentName:"ul"},"Current filters:",Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"Hawaii"),Object(s.b)("li",{parentName:"ul"},"Sorted by Date")))),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Monsters.com:")),Object(s.b)("p",null,Object(s.b)("inlineCode",{parentName:"p"},"npm run monster [search query]"),". For example:  ",Object(s.b)("inlineCode",{parentName:"p"},"npm run monster computer\n science intern")," Result from the run is available at: ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/radgrad/internbit/blob/master/src/scrapers/data/canonical/monster.canonical.data.json"}),"monster.data.json")),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Current filters:",Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"Only show jobs posted within last 30 days")))),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"LinkedIn:")," "),Object(s.b)("p",null,"Run ",Object(s.b)("inlineCode",{parentName:"p"},"npm run linkedin")," to start the script.\nResult from the run is available at: ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/radgrad/internbit/blob/master/src/scrapers/data/canonical/linkedin.canonical.data.json"}),"linkedin.data.json"),"         "),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"Filters:",Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"Only shows internships listed within last 30 days"),Object(s.b)("li",{parentName:"ul"},"Only show those listed as internships"),Object(s.b)("li",{parentName:"ul"},"Sorted by last posted")))),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"StackOverflow:")," "),Object(s.b)("p",null,"Run ",Object(s.b)("inlineCode",{parentName:"p"},"npm run stackoverflow")," to start the script.\nResult from the run is available at: ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/radgrad/internbit/blob/master/src/scrapers/data/canonical/stackoverflow.canonical.data.json"}),"stackoverflow.data.json")),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"GlassDoor:")),Object(s.b)("p",null,"Run ",Object(s.b)("inlineCode",{parentName:"p"},"npm run glassdoor")," to start the script. Result from the run is available at: ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/radgrad/internbit/blob/master/src/scrapers/data/canonical/glassdoor.canonical.data.json"}),"stackoverflow\n.data.json")),Object(s.b)("h2",{id:"building-a-scraper"},"Building A Scraper"),Object(s.b)("p",null,"InternAloha uses puppeteer to direct through an instance of a website in order to scrap a website. A video to understand the basics of puppeteer and website scraping can be seen ",Object(s.b)("a",Object(a.a)({parentName:"p"},{href:"https://youtu.be/IvaJ5n5xFqU"}),"here"),"."),Object(s.b)("p",null,"A couple of functions were implemented to simplify scraper code and is recommended to use to keep consistent coding: ",Object(s.b)("inlineCode",{parentName:"p"},"fetchInfo")," and ",Object(s.b)("inlineCode",{parentName:"p"},"autoScroll")," located at /scrapers/scraperFunction.js"))}p.isMDXComponent=!0}}]);
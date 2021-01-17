(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{107:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return h}));var r=t(0),o=t.n(r);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),c=function(e){var n=o.a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},u=function(e){var n=c(e.components);return o.a.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},b=o.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),b=r,h=u["".concat(a,".").concat(b)]||u[b]||d[b]||i;return t?o.a.createElement(h,s(s({ref:n},p),{},{components:t})):o.a.createElement(h,s({ref:n},p))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,a=new Array(i);a[0]=b;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var p=2;p<i;p++)a[p]=t[p];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},73:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return a})),t.d(n,"metadata",(function(){return s})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return c}));var r=t(3),o=t(7),i=(t(0),t(107)),a={title:"Install UI"},s={unversionedId:"developers/installation/install-ui",id:"developers/installation/install-ui",isDocsHomePage:!1,title:"Install UI",description:"Here is how to install the InternAloha site for development, and how to deploy it for evaluation.",source:"@site/docs/developers/installation/install-ui.md",slug:"/developers/installation/install-ui",permalink:"/documentation/docs/developers/installation/install-ui",version:"current",lastUpdatedBy:"Jenny",lastUpdatedAt:1610500020,sidebar:"someSidebar",previous:{title:"Install Scrapers",permalink:"/documentation/docs/developers/installation/install-scrapers"},next:{title:"Overview of checklists",permalink:"/documentation/docs/developers/checklists/overview"}},l=[{value:"Installation",id:"installation",children:[]},{value:"Running the site locally",id:"running-the-site-locally",children:[]},{value:"Deploying the site",id:"deploying-the-site",children:[]}],p={toc:l};function c(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},p,t,{components:n,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Here is how to install the InternAloha site for development, and how to deploy it for evaluation."),Object(i.b)("h2",{id:"installation"},"Installation"),Object(i.b)("p",null,"To install the system, first ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.npmjs.com/get-npm"}),"install NPM"),", then checkout ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/internaloha/internaloha"}),"InternAloha")," from GitHub."),Object(i.b)("p",null,"Next, cd into internaloha\\src and run ",Object(i.b)("inlineCode",{parentName:"p"},"npm install"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),'$ npm install\nnpm WARN eslint-config-airbnb@18.2.0 requires a peer of eslint-plugin-import@^2.21.2 but none is installed. You must install peer dependencies yourself.\nnpm WARN eslint-config-airbnb@18.2.0 requires a peer of eslint-plugin-jsx-a11y@^6.3.0 but none is installed. You must install peer dependencies yourself.\nnpm WARN eslint-config-airbnb@18.2.0 requires a peer of eslint-plugin-react@^7.20.0 but none is installed. You must install peer dependencies yourself.\nnpm WARN eslint-config-airbnb-base@14.2.0 requires a peer of eslint-plugin-import@^2.21.2 but none is installed. You must install peer dependencies yourself.\nnpm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.1.2 (node_modules\\fsevents):\nnpm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.1.2: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})\nnpm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.13 (node_modules\\jest-haste-map\\node_modules\\fsevents):\nnpm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.13: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})\nnpm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.13 (node_modules\\watchpack-chokidar2\\node_modules\\fsevents):\nnpm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.13: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})\nnpm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.13 (node_modules\\webpack-dev-server\\node_modules\\fsevents):\nnpm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.13: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})\n\naudited 1829 packages in 25.501s\n\n96 packages are looking for funding\n  run `npm fund` for details\n\nfound 2 vulnerabilities (1 low, 1 high)\n  run `npm audit fix` to fix them, or `npm audit` for details\n')),Object(i.b)("h2",{id:"running-the-site-locally"},"Running the site locally"),Object(i.b)("p",null,"If all goes as planned, you should now be able to run ",Object(i.b)("inlineCode",{parentName:"p"},"npm start")," to view the system in your browser at http://localhost:3000/:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"$ npm start\n\nCompiled successfully!\n\nYou can now view src in the browser.\n\n  Local:            http://localhost:3000\n  On Your Network:  http://10.0.1.21:3000\n\nNote that the development build is not optimized.\nTo create a production build, use npm run build.\n")),Object(i.b)("p",null,"Here is what the running system should look like:"),Object(i.b)("img",{width:"1000px",src:"/./documentation/img/internaloha.home.png"}),Object(i.b)("h2",{id:"deploying-the-site"},"Deploying the site"),Object(i.b)("p",null,"To deploy the site, invoke ",Object(i.b)("inlineCode",{parentName:"p"},"npm run deploy"),". For example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{}),"npm run deploy\n\n> src@0.1.0 predeploy /Users/philipjohnson/github/radgrad/internbit-ui-template/src\n> npm run build\n\n\n> src@0.1.0 build /Users/philipjohnson/github/radgrad/internbit-ui-template/src\n> react-scripts build\n\nCreating an optimized production build...\nCompiled successfully.\n\nFile sizes after gzip:\n\n  95.63 KB          build/static/css/2.7db008ac.chunk.css\n  60.12 KB (+14 B)  build/static/js/2.2a7dfe1b.chunk.js\n  768 B             build/static/js/runtime-main.cf30d0f8.js\n  605 B (+68 B)     build/static/js/main.cebf140d.chunk.js\n  217 B             build/static/css/main.467e710e.chunk.css\n\nThe project was built assuming it is hosted at ./.\nYou can control this with the homepage field in your package.json.\n\nThe build folder is ready to be deployed.\n\nFind out more about deployment here:\n\n  bit.ly/CRA-deploy\n\n\n> src@0.1.0 deploy /Users/philipjohnson/github/radgrad/internbit-ui-template/src\n> gh-pages -d build\n\nPublished\n")),Object(i.b)("p",null,"When the system is published, it will be available under ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://internaloha.github.io/internaloha"}),"https://internaloha.github.io/internaloha"),"."),Object(i.b)("p",null,"If the script fails with an authentication error, the simplest solution I've found is to run ",Object(i.b)("inlineCode",{parentName:"p"},"git push origin src")," on the command line. That will prompt you for your username and password and cache those values for a while so that the script will now succeed."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Important Note"),": ",Object(i.b)("inlineCode",{parentName:"p"},"npm run deploy"),' only commits and pushes the "master" branch of the repository, which contains the rendered version of the site. It does NOT commit the "src" branch of the repository. So, make sure that you push your changes to the src branch to GitHub as well using your git client of choice.'))}c.isMDXComponent=!0}}]);
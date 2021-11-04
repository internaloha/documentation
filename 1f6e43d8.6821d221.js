(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{104:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return b}));var a=n(0),o=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=o.a.createContext({}),p=function(e){var t=o.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},h=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,r=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),h=a,b=u["".concat(r,".").concat(h)]||u[h]||d[h]||i;return n?o.a.createElement(b,s(s({ref:t},c),{},{components:n})):o.a.createElement(b,s({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var c=2;c<i;c++)r[c]=n[c];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},75:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return u}));var a=n(3),o=n(7),i=(n(0),n(104)),r=["components"],s={title:"Developer Tips"},l={unversionedId:"developers/tips",id:"developers/tips",isDocsHomePage:!1,title:"Developer Tips",description:"Read the puppeteer documentation",source:"@site/docs/developers/tips.md",slug:"/developers/tips",permalink:"/documentation/docs/developers/tips",version:"current",sidebar:"someSidebar",previous:{title:"Production",permalink:"/documentation/docs/developers/production"},next:{title:"Legal Issues",permalink:"/documentation/docs/developers/legal"}},c=[{value:"Read the puppeteer documentation",id:"read-the-puppeteer-documentation",children:[]},{value:"Use log levels appropriately",id:"use-log-levels-appropriately",children:[]},{value:"Avoid <code>page.evaluate()</code>",id:"avoid-pageevaluate",children:[]},{value:"Prefer await super.getValues()",id:"prefer-await-supergetvalues",children:[]},{value:"Page navigation pattern",id:"page-navigation-pattern",children:[]},{value:"Prefer await super.selectorExists()",id:"prefer-await-superselectorexists",children:[]},{value:"Be kind to future you",id:"be-kind-to-future-you",children:[]},{value:"Don&#39;t use try-catch to provide &quot;normal&quot; control flow",id:"dont-use-try-catch-to-provide-normal-control-flow",children:[]},{value:"&quot;Error: Navigation failed because browser has disconnected!&quot;",id:"error-navigation-failed-because-browser-has-disconnected",children:[]},{value:"How to determine if a page has finished loading",id:"how-to-determine-if-a-page-has-finished-loading",children:[{value:"Case 1: When you know a selector will (eventually) exist on the page",id:"case-1-when-you-know-a-selector-will-eventually-exist-on-the-page",children:[]},{value:"Case 2: When you don&#39;t know if a selector will (ever) exist on the page",id:"case-2-when-you-dont-know-if-a-selector-will-ever-exist-on-the-page",children:[]}]},{value:"Try using the Google Cache",id:"try-using-the-google-cache",children:[]},{value:"Add throttling and variation",id:"add-throttling-and-variation",children:[]}],p={toc:c};function u(e){var t=e.components,n=Object(o.a)(e,r);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"read-the-puppeteer-documentation"},"Read the puppeteer documentation"),Object(i.b)("p",null,"It's actually quite informative to read the Puppeteer documentation at ",Object(i.b)("a",{parentName:"p",href:"https://pptr.dev/"},"https://pptr.dev/"),"."),Object(i.b)("p",null,"I recommend reading the intro section, and then the ",Object(i.b)("a",{parentName:"p",href:"https://pptr.dev/#?product=Puppeteer&version=v10.4.0&show=api-class-page"},"Page")," API page, as that is the API you will be using most frequently."),Object(i.b)("h2",{id:"use-log-levels-appropriately"},"Use log levels appropriately"),Object(i.b)("p",null,"While a quick console.log() can be useful during development, please remove them before committing to master. Instead, you should use the built-in logging system to output information to the console according to the following guidelines:"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"this.log.error()"),". When you want to indicate that a non-recoverable error has occurred, call ",Object(i.b)("inlineCode",{parentName:"p"},"this.log.error()"),". That said, it's probably more convenient to simply throw an Error for code in ",Object(i.b)("inlineCode",{parentName:"p"},"login()"),", ",Object(i.b)("inlineCode",{parentName:"p"},"launch()"),", ",Object(i.b)("inlineCode",{parentName:"p"},"generateListings()"),", or ",Object(i.b)("inlineCode",{parentName:"p"},"processListings()"),". That's because these errors will be caught by the superclass and a ",Object(i.b)("inlineCode",{parentName:"p"},"this.log.error()")," will be invoked automatically."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"this.log.warn()"),".  When something exceptional happens that you think should be highlighted, use ",Object(i.b)("inlineCode",{parentName:"p"},"this.log.warn()"),".  This logging level is also used to indicate that a scraper has started.  Running a scraper with logging set to ",Object(i.b)("inlineCode",{parentName:"p"},"warn")," means that there will typically be only one line of output under normal conditions."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"this.log.info()"),'. This is the default level of logging. The goal of "info" logging is to provide the user with feedback that enables them to know that the scraper is making progress, but without overwhelming them with output. Try to be judicious. For example, if your scraper is normally going to go through 90 pages, maybe emit an info message every 5 or 10 pages so that there aren\'t 90 lines of output.'),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"this.log.debug()"),". You can emit as much output as you want at the debug level. Note that the Scraper superclass sets up an event handler such that all output to the puppeteer console is logged at the debug level. So, when you run a scraper with logging set to debug, you might get lines of output similar to this:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"09:38:07 DEBUG LINKEDIN PUPPETEER CONSOLE: visitor.publishDestinations() result: The destination publishing iframe is already attached and loaded.\n09:38:07 DEBUG LINKEDIN PUPPETEER CONSOLE: Failed to load resource: the server responded with a status of 400 ()\n")),Object(i.b)("p",null,"It can be very informative to see what is being printed to the puppeteer console, although some of this output might not have been generated by your scraper!"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"this.log.trace()"),". Calling this will emit a stack trace at the moment of invocation."),Object(i.b)("p",null,"So, for example, here is the default output for the NSF scraper:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'$ npm run scrape -- -s nsf\n\n> scraper@2.0.0 scrape\n> ts-node -P tsconfig.buildScripts.json scrape.ts "-s" "nsf"\n\n12:21:06 WARN NSF Launching NSF scraper\n12:21:10 INFO NSF Wrote 100 listings.\n12:21:10 INFO NSF Wrote statistics.\n')),Object(i.b)("p",null,"Since this scraper runs quickly, there's no need to augment the built-in logging messages."),Object(i.b)("p",null,"On the other hand, the Simply Hired scraper default (info) output might best look like this:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},'$ npm run scrape -- -s simplyhired\n\n> scraper@2.0.0 scrape\n> ts-node -P tsconfig.buildScripts.json scrape.ts "-s" "simplyhired"\n\n12:24:03 WARN SIMPLYHIRED Launching SIMPLYHIRED scraper\n12:24:23 INFO SIMPLYHIRED Processed page 1, 19 internships\n12:26:07 INFO SIMPLYHIRED Processed page 10, 152 internships\n12:27:49 INFO SIMPLYHIRED Processed page 20, 279 internships\n12:29:23 INFO SIMPLYHIRED Processed page 30, 399 internships\n12:30:59 INFO SIMPLYHIRED Processed page 40, 519 internships\n12:32:38 INFO SIMPLYHIRED Processed page 50, 646 internships\n12:34:37 INFO SIMPLYHIRED Processed page 60, 798 internships\n12:36:59 INFO SIMPLYHIRED Processed page 70, 983 internships\n12:39:15 INFO SIMPLYHIRED Processed page 80, 1163 internships\n12:41:28 INFO SIMPLYHIRED Processed page 90, 1343 internships\n12:41:54 INFO SIMPLYHIRED Reached the end of pages!\n12:41:54 INFO SIMPLYHIRED Wrote 1377 listings.\n12:41:54 INFO SIMPLYHIRED Wrote statistics.\n')),Object(i.b)("p",null,"In this case, there's about 90 seconds delay between each line of output. You can write code like this to elide output in info mode but print it all out in debug mode."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"const message = `Processed page ${totalPages}, ${internshipsPerPage} internships`;\n((totalPages === 1) || (totalPages % 10 === 0)) ? this.log.info(message) : this.log.debug(message);\n")),Object(i.b)("h2",{id:"avoid-pageevaluate"},"Avoid ",Object(i.b)("inlineCode",{parentName:"h2"},"page.evaluate()")),Object(i.b)("p",null,"The FAQ section of ",Object(i.b)("a",{parentName:"p",href:"https://pptr.dev/"},"https://pptr.dev/"),' has a question entitled "What\u2019s the difference between a \u201ctrusted" and "untrusted" input event?". It turns out that to avoid sites from blocking us as robots, we should always generate "trusted" events. This means that we should avoid the use of ',Object(i.b)("inlineCode",{parentName:"p"},"page.evaluate()"),", which generates untrusted events. Here's a quote from the docs:"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"For automation purposes it\u2019s important to generate trusted events. All input events generated with Puppeteer are trusted and fire proper accompanying events. If, for some reason, one needs an untrusted event, it\u2019s always possible to hop into a page context with page.evaluate and generate a fake event:")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"await page.evaluate(() => {\n  document.querySelector('button[type=submit]').click();\n});\n")),Object(i.b)("p",null,"We definitely want to avoid \"fake events\", because certain sites might use them to bar us from scraping them. Note that it's OK to use page.evaluate() if you aren't generating events (i.e. you are just inspecting the page contents).  You should avoid things like .click() inside page.evaluate()."),Object(i.b)("h2",{id:"prefer-await-supergetvalues"},"Prefer await super.getValues()"),Object(i.b)("p",null,"Many scrapers implement code similar to this:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"async oldVersionOfGetValues(selector, field) {\n  const returnVals = await this.page.evaluate((selector, field) => {\n    const vals = [];\n    const nodes = document.querySelectorAll(selector);\n    nodes.forEach(node => vals.push(node[field]));\n    return vals;\n  }, selector, field);\n  return returnVals;\n}\n")),Object(i.b)("p",null,"I then discovered after studying the Puppeteer documentation that it could be replaced with a one-liner using ",Object(i.b)("inlineCode",{parentName:"p"},"page.$$eval"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"async getValues(selector, field) {\n  return await this.page.$$eval(selector, (nodes, field) => nodes.map(node => node[field]), field);\n}\n")),Object(i.b)("p",null,"This is used sufficiently often that it is now present in the Scraper.ts superclass. So, you should replace code similar to oldVersionOfGetValues with super.getValues()."),Object(i.b)("h2",{id:"page-navigation-pattern"},"Page navigation pattern"),Object(i.b)("p",null,"There is a standard pattern for when your script performs an action (such as logging in or clicking a button) that results in page navigation. It looks like this:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"await Promise.all([\n  this.page.click('input[class=\"c-button c-button--blue s-vgPadLeft1_5 s-vgPadRight1_5\"]'),\n  this.page.waitForNavigation()\n]);\n")),Object(i.b)("p",null,"The idea is that you have to combine the page.waitForNavigation() with the page.click() (or whatever) in a Promise.all() so that you don't proceed to the next command until both have completed. Doing them serially won't work."),Object(i.b)("p",null,"For more details, see ",Object(i.b)("a",{parentName:"p",href:"https://pptr.dev/#?product=Puppeteer&version=v10.4.0&show=api-pagewaitfornavigationoptions"},"https://pptr.dev/#?product=Puppeteer&version=v10.4.0&show=api-pagewaitfornavigationoptions"),"."),Object(i.b)("p",null,"Note: if you use ",Object(i.b)("inlineCode",{parentName:"p"},"page.goto()"),", you don't need to add ",Object(i.b)("inlineCode",{parentName:"p"},"page.waitForNavigation()"),".  See ",Object(i.b)("a",{parentName:"p",href:"https://stackoverflow.com/a/57881877/2038293"},"https://stackoverflow.com/a/57881877/2038293")," for details."),Object(i.b)("h2",{id:"prefer-await-superselectorexists"},"Prefer await super.selectorExists()"),Object(i.b)("p",null,"There are lots of situations in which you want to do some processing as long as there's at least one occurrence of a selector on the page.  Because this is such a common pattern, the Scraper superclass provides a simple method for this:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"/**\n * Return true if the passed selector appears on the page.\n */\nasync selectorExists(selector) {\n  return !! await this.page.$(selector);\n}\n")),Object(i.b)("p",null,"This makes it more readable to write loops:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"const listingSelector = '#listing';\n\nthis.page.goto(getUrl());\nwhile (await super.selectorExists(listingSelector)) {\n  // process listings on this page.\n  this.page.goto(getNextUrl());\n}\n")),Object(i.b)("h2",{id:"be-kind-to-future-you"},"Be kind to future you"),Object(i.b)("p",null,'"Future you" refers to you in several months when you have been working on other things, but have to come back to fix a broken scraper.  Being kind of future you means structuring your code in such a way that it is easier to re-understand.  Here are some tips:'),Object(i.b)("h4",{id:"provide-meaningful-variable-names-to-document-magic-strings"},'Provide meaningful variable names to document "magic" strings'),Object(i.b)("p",null,"Consider the following line of code:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"await this.page.waitForSelector('a[class=\"styles_component__1c6JC styles_defaultLink__1mFc1 styles_information__1TxGq\"]');\n")),Object(i.b)("p",null,"What, precisely are we waiting for?  The problem here is that the meaning of this selector string is opaque: it doesn't provide us with any information about what it is, where it might be, and why we might be waiting for it."),Object(i.b)("p",null,"One good way to fix this is to assign that string to a variable whose name provides more information:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"const internshipLink = 'a[class=\"styles_component__1c6JC styles_defaultLink__1mFc1 styles_information__1TxGq\"]';\nawait this.page.waitForSelector(internshipLink);\n")),Object(i.b)("p",null,"A benefit of this approach over simply adding a comment string is that if you want to inspect the page manually using DevTools, you can simply copy-and-paste the line containing the variable definition into the DevTools console, which makes it easy to replicate the query using non-Puppeteer Dev Tools operations such as:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"document.querySelector(internshipLink)\n")),Object(i.b)("h4",{id:"avoid-deep-nesting"},"Avoid deep nesting"),Object(i.b)("p",null,"If your code has an if statement inside a while loop inside an if statement, for example, it will be hard to read."),Object(i.b)("p",null,"In these cases, think about how to modularize your code. Maybe there is a block of code that can be refactored into a private method with a useful return value.  That is useful for understanding, and also for debugging."),Object(i.b)("h2",{id:"dont-use-try-catch-to-provide-normal-control-flow"},'Don\'t use try-catch to provide "normal" control flow'),Object(i.b)("p",null,"Consider the following code:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"try {\n  // Click the \"Load More\" button\n  await this.page.click('.load_more_jobs');\n} catch (err) {\n  this.log.debug('--- All jobs are Listed, no \"Load More\" button --- ');\n}\n")),Object(i.b)("p",null,"What is problematic about this code is that it is not an error for a page to not have a Load More button. So, the use of try-catch is not appropriate."),Object(i.b)("p",null,"In this case, what is needed is to test whether or not the selector exists and only click it if so:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"const loadJobsSelector = 'load_more_jobs';\nif (await super.selectorExists(loadJobsSelector) {\n  await this.page.click(`.${loadJobsSelector}`;\n}\n")),Object(i.b)("p",null,"It doesn't seem particularly interesting to provide the debugging log statement, so I've omitted it, but you could add it back in if you really wanted it as an else clause."),Object(i.b)("h2",{id:"error-navigation-failed-because-browser-has-disconnected"},'"Error: Navigation failed because browser has disconnected!"'),Object(i.b)("p",null,"Are you experiencing an intermittent error similar to this?"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"10:37:59 ERROR APPLE Execution context was destroyed, most likely because of a navigation.\n(node:95928) UnhandledPromiseRejectionWarning: Error: Navigation failed because browser has disconnected!\n    at /Users/philipjohnson/github/internaloha/internaloha/scrapers-v2/node_modules/puppeteer/lib/cjs/puppeteer/common/LifecycleWatcher.js:51:147\n")),Object(i.b)("p",null,"According to ",Object(i.b)("a",{parentName:"p",href:"https://stackoverflow.com/questions/54527982/why-is-puppeteer-reporting-unhandledpromiserejectionwarning-error-navigation"},"this stackoverflow page"),", ",Object(i.b)("em",{parentName:"p"},'The "Navigation failed because browser has disconnected" error usually means that the node scripts that launched Puppeteer ends without waiting for the Puppeteer actions to be completed.')),Object(i.b)("p",null,"The stackoverflow answer goes on to debug the specific code in question, but there is a much more general answer:"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Be sure that you preface every Puppeteer operation (i.e. ",Object(i.b)("inlineCode",{parentName:"em"},"this.page.<operation>"),") with ",Object(i.b)("inlineCode",{parentName:"em"},"await"),".")),Object(i.b)("p",null,"For example, there was some scraper code that generated this error occasionally. On review, the following lines were discovered:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"this.page.goto(pageUrl(++pageNum), {waitUntil: 'networkidle2'});\nawait this.page.waitForTimeout(3000);\n")),Object(i.b)("p",null,"Because the ",Object(i.b)("inlineCode",{parentName:"p"},"this.page.goto")," was not proceeded with an ",Object(i.b)("inlineCode",{parentName:"p"},"await"),", that line of code returned immediately. The next line of code forced a wait of 3 seconds, which might or might not be enough time for the ",Object(i.b)("inlineCode",{parentName:"p"},"goto")," to complete successfully. If it is enough time, then everything would be OK. If it is not enough time, then we'd get the error."),Object(i.b)("p",null,"The solution is to simply add the ",Object(i.b)("inlineCode",{parentName:"p"},"await"),", which also means we don't need the ",Object(i.b)("inlineCode",{parentName:"p"},"waitForTimeout"),":"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"await this.page.goto(pageUrl(++pageNum), {waitUntil: 'networkidle2'});\n")),Object(i.b)("p",null,"So, if you are getting this error intermittently, a quick thing to do is a search for every occurrence of ",Object(i.b)("inlineCode",{parentName:"p"},"this.page")," in your scraper code, and verify that every occurrence of ",Object(i.b)("inlineCode",{parentName:"p"},"this.page")," is preceded by ",Object(i.b)("inlineCode",{parentName:"p"},"await"),"."),Object(i.b)("h2",{id:"how-to-determine-if-a-page-has-finished-loading"},"How to determine if a page has finished loading"),Object(i.b)("p",null,"One issue with scraper design is to ensure that the scraper does not try to operate on a page until it has loaded."),Object(i.b)("p",null,"A common strategy in prior scraper implementations is to liberally insert code to insert pauses into script execution. For example, the following code pauses the script for 3 seconds each time it is executed:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre"},"await this.page.waitForTimeout(3000);\n")),Object(i.b)("p",null,"There are two problems with this approach:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"It is hard to figure out the appropriate length of time to pause. Is 3 seconds enough for all situations?"),Object(i.b)("li",{parentName:"ol"},"It might slow down script execution significantly. If you insert a 3 second pause into a loop for each listing, and there are 500 listings, then you've just forced your script to require a minimum of 1500 seconds to execute.")),Object(i.b)("p",null,'Some times these pauses are inserted to mimic human "speed" of page manipulation, but this is only needed for a few scrapers. More often, these pauses end up being inserted as a way to wait until the page is loaded.'),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://stackoverflow.com/questions/52497252/puppeteer-wait-until-page-is-completely-loaded"},"This stackoverflow page")," has a number of comments regarding this issue.  From it, we can get a number of hints about how to best wait until a page has loaded."),Object(i.b)("h3",{id:"case-1-when-you-know-a-selector-will-eventually-exist-on-the-page"},"Case 1: When you know a selector will (eventually) exist on the page"),Object(i.b)("p",null,"If you are ",Object(i.b)("strong",{parentName:"p"},"sure")," that a page, when finally loaded, will contain the selector of interest, then your best approach is to use ",Object(i.b)("a",{parentName:"p",href:"https://github.com/puppeteer/puppeteer/blob/main/docs/api.md#pagewaitforselectorselector-options"},"page.waitForSelector()"),". By default, the timeout is '0', which means that this command will wait indefinitely for the selector to be present on the page."),Object(i.b)("h3",{id:"case-2-when-you-dont-know-if-a-selector-will-ever-exist-on-the-page"},"Case 2: When you don't know if a selector will (ever) exist on the page"),Object(i.b)("p",null,"If you are not sure that the selector of interest will exist, then things are more complicated, since you don't know if the absence of the selector is due to the selector not being present or the page not having completed loading."),Object(i.b)("p",null,'First, it is important to understand that completing the "loading" process has two phases:'),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Complete the downloading of all page resources (HTML, Javascript, Images, etc) from the server over the network."),Object(i.b)("li",{parentName:"ol"},"Complete the execution of all Javascript scripts on the page, since these scripts might create DOM elements.")),Object(i.b)("p",null,"To address (1), you can use the ",Object(i.b)("inlineCode",{parentName:"p"},"waitUntil")," option of commands like ",Object(i.b)("inlineCode",{parentName:"p"},"page.goto"),", as documented ",Object(i.b)("a",{parentName:"p",href:"https://github.com/puppeteer/puppeteer/blob/main/docs/api.md#pagegotourl-options"},"here"),".  If you experience loading issues, then you might add this option with a value of ",Object(i.b)("inlineCode",{parentName:"p"},"networkidle0"),".  Please note that you do not need to set ",Object(i.b)("inlineCode",{parentName:"p"},"timeout"),", as it is set to ",Object(i.b)("inlineCode",{parentName:"p"},"0")," globally by the scraper superclass."),Object(i.b)("p",null,"In some cases, a page might have time-consuming Javascript scripts that execute. If you can verify that this is an issue in the site you are scraping, then you might want to consider the ",Object(i.b)("inlineCode",{parentName:"p"},"waitTillHTMLRendered")," function, documented in ",Object(i.b)("a",{parentName:"p",href:"https://stackoverflow.com/a/61304202/2038293"},"this stackoverflow answer"),"."),Object(i.b)("h2",{id:"try-using-the-google-cache"},"Try using the Google Cache"),Object(i.b)("p",null,"If you are getting blocked by the site, see if you can scrape the Google cache version.  Instructions are ",Object(i.b)("a",{parentName:"p",href:"https://webscraping.com/blog/Using-Google-Cache-to-crawl-a-website/"},"here"),". Basically, you just need to prepend \u201c",Object(i.b)("a",{parentName:"p",href:"http://webcache.googleusercontent.com/search?q=cache:%E2%80%9D"},"http://webcache.googleusercontent.com/search?q=cache:\u201d")," to the beginning of the URL."),Object(i.b)("p",null,"While this can result in a somewhat out-of-date version of the site, it's normally just a few days or weeks old, which is plenty recent enough for us."),Object(i.b)("h2",{id:"add-throttling-and-variation"},"Add throttling and variation"),Object(i.b)("p",null,"Some sites monitor how fast requests come from a particular IP address, and block if they come in too fast or are too regular."),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"slomo")," command line argument creates a lower bound on how fast the scraper issues HTTP requests. This is good when developing the system with ",Object(i.b)("inlineCode",{parentName:"p"},"no-headless"),". However, this is often more slow than is necessary for production, and does not support variation between navigation."),Object(i.b)("p",null,"To prevent the scraper from traversing to pages too quickly, the ",Object(i.b)("inlineCode",{parentName:"p"},"super.goto()")," method provides a drop-in replacement for ",Object(i.b)("inlineCode",{parentName:"p"},"this.page.goto()")," which adds a random delay between 1 second and ",Object(i.b)("inlineCode",{parentName:"p"},"super.maxRandomWait")," milliseconds (which currently defaults to 5000). So, use this method to automatically throttle your scraper's frequency of page requests, and to add some variation. You can change the ",Object(i.b)("inlineCode",{parentName:"p"},"maxRandomWait")," variable in your constructor if you determine you need a different level of variability."),Object(i.b)("p",null,"However, this approach won't work if you navigate using ",Object(i.b)("inlineCode",{parentName:"p"},"this.page.click()"),". In this case, you will have to manually insert a pause.  To make it easier to wait a random amount of time, you can use ",Object(i.b)("inlineCode",{parentName:"p"},"super.randomWait()"),"."))}u.isMDXComponent=!0}}]);
---
title: Overview
---

## Top Level Interface

### Commands

The code is stored under ``/scrapers/main.js``.

| Script | Site |
| ------- | ----- |
|  `npm run scrapers dev open` |  Runs the script in development mode and opens browser for each scraper. Outputs all Logging info.  | 
|  `npm run scrapers dev close` |  Runs the script in development mode, does not open up browser. Outputs all Logging info. | 
|  `npm run scrapers production` |  Runs the script in production mode, does not open up browser. Only outputs logging error.| 


Explanation of how the top level interface works:

* Each scraper definition file exports a single async function that runs the scraper.
* ``main.js's main`` loops through all scraper definition functions, invoking them, waits for all of the results to 
  be done. 
* Once all the scrapers are done, postprocessing is done and final data is written in a UI-ready format.

## Development mode
* Depending on args passed (open/close), all scrapers will either open or not open a browser.
* Produces logging output.
* Does not require a control-c to terminate.
* Does all necessary post-processing of the data.

## Production Mode 

* Runs any or all of the scripts without opening up a browser.
* Does not produce any logging output, unless they are errors.
* Does not require a control-c to terminate.
* Does all necessary post-processing of the data.

**NOTE:** At the moment, it only works for ``acm``, ``aexpress``, and ``apple`` because it involves changing the 
scraper code, and I am waiting for them to be refactored:  

Allows us to specify whether or not to run in headless or not when using top level command line.
```javascript
  // in the main function for scrapers, add the parameter headless
  async function main(headless) {
    // pass headless parameter to startBrowser
    [browser, page] = await startBrowser(headless);
    // some other code
  }
```

The following code blocks enables us to individually test each scraper as well.

Added at the very end of the code:
```javascript
if (process.argv.includes('main')) {
  const headless = checkHeadlessOrNot(process.argv);
  if (headless === -1) {
    Logger.error('Invalid argument supplied, please use "open", or "close"');
    process.exit(0);
  }
  main(headless);
}
export default main;

```

In ``package.json``, change the script to include main. For example: 
```
  "scripts": {
    "acm": "node scrapers/acm.js main",
    "aexpress": "node scrapers/aexpress.js main",
    "apple": "node scrapers/apple.js main",
    "scrapers": "node scrapers/main.js"
  },```


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


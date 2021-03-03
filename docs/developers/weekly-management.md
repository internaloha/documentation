---
title: Weekly Management
sidebar_label: Weekly Management
---

## Set up 
Make a copy of `sample.config.json` and rename it to `config.json`. Some scrapers like angellist or Student 
Opportunity Center requires credentials. Make an account on those sites and fill in the credentials in `config.json`.
`config.json` will **not** be committed to the repository.

Example:
```json
{
  "angellist": {
    "user": "johnfoo@testing.com",
    "password": "changeme"
  },
  "studentOpportunityCenter": {
    "user": "johnfoo@testing.com",
    "password": "changeme"
  }
}
```

## How to run the scrapers

### Top Level Interface

More information can be found in [scrapers/overview](docs/developers/scrapers/overview.md).

The code is stored under ``/scrapers/main.js``.

| Script | Information |
| ------- | ----- |
|  `npm run scrapers dev open` |  Runs the script in development mode and opens browser for each scraper. Outputs all Logging info.  | 
|  `npm run scrapers dev close` |  Runs the script in development mode, does not open up browser. Outputs all Logging info. | 
|  `npm run scrapers production` |  Runs the script in production mode, does not open up browser. Only outputs logging error.| 


Explanation of how the top level interface works:

* Each scraper definition file exports a single async function that runs the scraper.
* ``main.js's main`` loops through all scraper definition functions, invoking them, waits for all the results to
  be done.
* Once all the scrapers are done, postprocessing is done and final data is written in a UI-ready format.

### Development mode
* Depending on args passed (open/close), all scrapers will either open or not open a browser.
* Produces logging output.
* Does not require a control-c to terminate.
* Does all necessary post-processing of the data.

### Production Mode

* Runs any or all of the scripts without opening up a browser.
* Does not produce any logging output, unless they are errors.
* Does not require a control-c to terminate.
* Does all necessary post-processing of the data.

### Scrapers that are not in the top level interface:

The following scrapers are not included in the top level interface because they have reCaptcha, so it cannot be 
automated:

| Site | Reason | Code to individually run scraper|
| ------- | ----- | --- |
|  angellist |  Requires reCaptcha  |  `npm run angellist` |
|  Chegg (Internships) |  Requires reCaptcha  |  `npm run internships` |

Running those scripts (upon completion) will do all necessary post-processing of the data.

## How to update the site with the updated data

The top level interface handles the postprocessing. Once the script is done, the data is written in a UI-ready 
format and should already be displayed locally on the site.

## What kind of QA should be performed on the updated site to ensure it's OK.

1. Look through locations filter 

## Problems can occur during this process, and what to do about them.

Common Bugs:
- Location has bogus information


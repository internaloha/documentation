---
title: Weekly Management
sidebar_label: Weekly Management
---

To understand the management issues surrounding InternAloha, we should run the scrapers and re-deploy the site with 
the updated listings once a week. It would also be good for this task to rotate to different members of the group, to ensure that multiple people can do it, and to ensure that there is a good documentation for this management.

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

Make sure to run `npm install` under `/scrapers` to install the dependencies if you haven't already done so.

## How to run the scrapers

### Top Level Interface

More information can be found in [scrapers/overview](scrapers/overview.md).

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
format and should already be displayed locally at http://localhost:3000/internaloha.

## What kind of QA should be performed on the updated site to ensure it's OK.

1. Look through and try the locations filter 
2. Look through and try the skills filter
3. Click on the first couple internships and make sure the links work
4. Try search for an internship
5. Make sure infinite loading works

## Problems can occur during this process, and what to do about them.

Common Bugs:
- Location filter has bogus information (eg. Shows 'Hardware Engineer')
   - Solution: Look at which scrapers cause the bogus information. In most cases, it's the scrapers' error (eg. 
     supplying the wrong information to `location.state`) and 
     not the post-processing (which is done in `multi-parse.js`).
     
- Far too many listings with the same dates for Posted and Last Updated
  - This usually means the scraper might be accidently using the same datetime for both. Look at which scrapers it 
    came from and troubleshoot from there. 
    
- Site doesn't load at all
  - Look at the data jsons (`internaloha/src/src/data/`). It could be that one of the data doesn't have the correct 
    format.
  - You can also look at `InternshipFilters.jsx` and comment out each scraper to find the issue.

- Running `[Scraper Name]` prints out error logs
  - Due to the nature of scraping, it is bound to happen. Make a note of it and bring it up at the next meeting so 
    somebody can fix it. Usually the fix is simple -- having to change the CSS selectors.
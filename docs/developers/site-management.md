---
title: Site Management
---

To ensure that the internship information in InternAloha is up to date, we must re-run the scrapers and redeploy the site with the updated data on a regular basis. Here's how to do that:

## Install the system

If you haven't already, [Install the UI](./ui/installation) and [Install the Scrapers](./scrapers/installation).

## Run the unattended scrapers

Invoke `npm run scrapers production` to run all the unattended scrapers.  This currently takes about an hour to 
complete.

Here is a sample invocation:

```
C:\Users\JenniferHsu\Documents\GitHub\internaloha\scraper>npm run scrapers production

> scrapers@0.1.0 scrapers C:\Users\JenniferHsu\Documents\GitHub\internaloha\scraper
> node scrapers/main.js "production"
```

Be sure that no errors occur. If errors occur, contact the team using the #internaloha-chat channel to discuss.

## Run attended scrapers

Now run the attended scrapers: `npm run scrapers angellist dev close` and `npm run scrapers internships dev close`.

A sample invocation will involve the following:

```
C:\Users\JenniferHsu\Documents\GitHub\internaloha\scraper>npm run scrapers internships dev open

> scrapers@0.1.0 internships C:\Users\JenniferHsu\Documents\GitHub\internaloha\scraper
> node scrapers/internships.js
```

<img src="/documentation/img/internship-recaptcha.png"/>

```
C:\Users\JenniferHsu\Documents\GitHub\internaloha\scraper>npm run scrapers angellist dev open

> scrapers@0.1.0 angellist C:\Users\JenniferHsu\Documents\GitHub\internaloha\scraper
> node scrapers/angellist.js
```

<img src="/documentation/img/angellist-recaptcha.png"/>

Be sure that no errors occur. If errors occur, contact the team using the #internaloha-chat channel to discuss.

## Perform Quality Assurance

Follow the [Running the UI locally](./ui/running) to bring up the site locally with the updated data. Now check the site to see if everything looks OK. For example:

1. Look through and try the locations filter
2. Look through and try the skills filter
3. Click on the first couple internships and make sure the links work
4. Try search for an internship
5. Make sure infinite loading works

## Redeploy UI

Once you are satisfied the update is OK, then follow the [UI Deployment](./ui/deploying) instructions to redeploy the site with the updated information.

Running those scripts (upon completion) will do all necessary post-processing of the data.


## Troubleshooting

### Location filter has bogus information (eg. Shows 'Hardware Engineer')

Solution: Look at which scrapers cause the bogus information. In most cases, it's the scrapers' error (eg. supplying the wrong information to `location.state`) and not the post-processing (which is done in `multi-parse.js`).
     
### Far too many listings with the same dates for Posted and Last Updated

This usually means the scraper might be accidentally using the same datetime for both. Look at which scrapers it came from and troubleshoot from there.
    
### Site doesn't load at all

Look at the data jsons (`internaloha/ui/src/data/`). It could be that one of the data doesn't have the correct format.
You can also look at `InternshipFilters.jsx` and comment out each scraper to find the issue.

### Running `[Scraper Name]` prints out error logs

Due to the nature of scraping, it is bound to happen. Please post the error to #internaloha-chat so somebody can fix it. Usually the fix is simple -- having to change the CSS selectors.
---
title: Site Management
---

To ensure that the internship information in InternAloha is up to date, we must re-run the scrapers and redeploy the site with the updated data on a regular basis. Here's how to do that:

## Install the system

If you haven't already, [Install the UI](./ui/installation) and [Install the Scrapers](./scrapers/installation).

Be sure to set up the configuration file with your credentials for certain scrapers.

## Run the unattended scrapers

Invoke `npm run scrapers production` to run all the unattended scrapers. These are scrapers that can run without any user interaction.  They currently take about an hour to complete.

Here is a sample invocation:

```
C:\Users\JenniferHsu\Documents\GitHub\internaloha\scraper>npm run scrapers production

> scrapers@0.1.0 scrapers C:\Users\JenniferHsu\Documents\GitHub\internaloha\scraper
> node scrapers/main.js "production"

Starting scraper apple at 9:02 PM
Starting scraper acm at 9:02 PM
Starting scraper aexpress at 9:02 PM
Starting scraper linkedin at 9:02 PM
Starting scraper monster at 9:02 PM
Starting scraper simplyhired at 9:02 PM
Starting scraper Cisco at 9:02 PM
Starting scraper zipRecruiter at 9:02 PM
Starting scraper stackoverflow at 9:02 PM
Starting scraper indeed at 9:02 PM
Starting scraper idealist at 9:02 PM
Starting scraper hawaiislack at 9:02 PM
Starting scraper Glassdoor at 9:02 PM
Starting scraper nsf-reu at 9:02 PM
Finished scraper nsf-reu at 9:02 PM (a few seconds ago)
Finished scraper stackoverflow at 9:03 PM (a few seconds ago)
Finished scraper idealist at 9:03 PM (a few seconds ago)
Finished scraper aexpress at 9:03 PM (a few seconds ago)
Finished scraper hawaiislack at 9:03 PM (a few seconds ago)
Finished scraper cisco at 9:03 PM (a few seconds ago)
Finished scraper glassdoor at 9:03 PM (a minute ago)
Finished scraper indeed at 9:03 PM (a minute ago)
Finished scraper zipRecruiter at 9:03 PM (a minute ago)
Finished scraper linkedin at 9:04 PM (a minute ago)
Finished scraper simplyhired at 9:04 PM (a minute ago)
Finished scraper apple at 9:04 PM (2 minutes ago)
Finished scraper acm at 9:09 PM (7 minutes ago)
Finished scraper monster at 9:43 PM (40 minutes ago)
```

Be sure that no errors occur. If errors occur, contact the team using the #internaloha-chat channel to discuss.

## Run the attended scrapers

Now run the scrapers that require user interaction to complete (the "attended" scrapers). There are currently two attended scrapers: angellist and Chegg Internships:

### Internships

Run the Internships scraper in attended mode with `npm run scrapers internships dev open`:


```
C:\Users\JenniferHsu\Documents\GitHub\internaloha\scraper>npm run scrapers internships dev open

> scrapers@0.1.0 internships C:\Users\JenniferHsu\Documents\GitHub\internaloha\scraper
> node scrapers/internships.js
Starting scraper internships (chegg) at 9:02 PM
```

Here is an example screen shot requiring user input:

<img style={{border: "1px solid black"}} src="/documentation/img/internship-recaptcha.png"/>

### Angel List

Run the Angel List scraper in attended mode with `npm run scrapers angellist dev open`:

```
C:\Users\JenniferHsu\Documents\GitHub\internaloha\scraper>npm run scrapers angellist dev open

> scrapers@0.1.0 angellist C:\Users\JenniferHsu\Documents\GitHub\internaloha\scraper
> node scrapers/angellist.js
Starting scraper angellist at 9:02 PM
```

Here is an example screen shot requiring user input:

<img style={{border: "1px solid black"}} src="/documentation/img/angellist-recaptcha.png"/>

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
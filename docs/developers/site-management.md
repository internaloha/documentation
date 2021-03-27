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
> scrapers@0.1.0 scrapers C:\Users\JenniferHsu\Documents\GitHub\internaloha\scraper
> node scrapers/main.js "production"

Starting scraper apple at 11:55 AM
Starting scraper acm at 11:55 AM
Starting scraper aexpress at 11:55 AM
Starting scraper linkedin at 11:55 AM
Starting scraper monster at 11:55 AM
Starting scraper simplyhired at 11:55 AM
Starting scraper Cisco at 11:55 AM
Starting scraper zipRecruiter at 11:55 AM
Starting scraper stackoverflow at 11:55 AM
Starting scraper indeed at 11:55 AM
Starting scraper idealist at 11:55 AM
Starting scraper hawaiislack at 11:55 AM
Starting scraper Glassdoor at 11:55 AM
Starting scraper nsf-reu at 11:55 AM
Elapsed time for nsf-reu: a few seconds | 93 listings scraped
Elapsed time for hawaiislack: a few seconds | 0 listings scraped
Elapsed time for stackoverflow: a few seconds | 6 listings scraped
Elapsed time for idealist: a few seconds | 0 listings scraped
Elapsed time for simplyHired: a few seconds | 2 listings scraped
Elapsed time for aexpress: a few seconds | 8 listings scraped
Elapsed time for indeed: a few seconds | 2 listings scraped
Elapsed time for glassdoor: a few seconds | 0 listings scraped
Elapsed time for Cisco: a few seconds | 9 listings scraped
Elapsed time for zipRecruiter: a minute | 23 listings scraped
Elapsed time for linkedin: a minute | 7 listings scraped
Elapsed time for apple: 2 minutes | 40 listings scraped
Elapsed time for acm: 7 minutes | 156 listings scraped
Elapsed time for monster: an hour | 224 listings scraped
```

Be sure that no errors occur. If errors occur, contact the team using the #internaloha-chat channel to discuss.

## Run the attended scrapers

Now run the scrapers that require user interaction to complete (the "attended" scrapers). There are currently two attended scrapers: angellist and Chegg Internships:

### Chegg

Run the Chegg scraper in attended mode with `npm run scrapers internships dev open`:


```
C:\Users\JenniferHsu\Documents\GitHub\internaloha\scraper>npm run scrapers chegg dev open

> scrapers@0.1.0 internships C:\Users\JenniferHsu\Documents\GitHub\internaloha\scraper
> node scrapers/internships.js
Starting scraper internships (chegg) at 9:02 PM
Elapsed time for internships (chegg): 34 minutes | 51 listings scraped
```

Here is an example screenshot requiring user input:

<img style={{border: "1px solid black"}} src="/documentation/img/internship-recaptcha.png"/>

### Angel List

Run the Angel List scraper in attended mode with `npm run scrapers angellist dev open`:

```
C:\Users\JenniferHsu\Documents\GitHub\internaloha\scraper>npm run scrapers angellist dev open

> scrapers@0.1.0 angellist C:\Users\JenniferHsu\Documents\GitHub\internaloha\scraper
> node scrapers/angellist.js
Starting scraper angellist at 9:02 PM
Elapsed time for angellist: 23 minutes | 36 listings scraped
```

Here is an example screenshot requiring user input:

<img style={{border: "1px solid black"}} src="/documentation/img/angellist-recaptcha.png"/>

Be sure that no errors occur. If errors occur, contact the team using the #internaloha-chat channel to discuss.

## Perform Quality Assurance

Follow the [Running the UI locally](./ui/running.md) to bring up the site locally with the updated data. Now check the site to 
see if everything looks OK. For example:

1. Look through and try the locations filter
2. Look through and try the skills filter
3. Click on the first couple internships and make sure the links work
4. Try search for an internship
5. Make sure infinite loading works

## Redeploy UI

Once you are satisfied the update is OK, then follow the [UI Deployment](./ui/deploying.md) instructions to redeploy 
the site with the updated information.

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
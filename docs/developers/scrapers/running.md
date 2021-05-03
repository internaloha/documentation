---
title: Run Scrapers
---

## Supported sites

We currently provide scrapers for the following sites:

| Scraper Name | Site | Attend? | Login? | Search parameters |
| ------------ | ---- | --------- | ------ | ----------- |
|  acm | https://jobs.acm.org |  | | US |
| aexpress | https://jobs.americanexpress.com/jobs |  | |  US, Internship |
| angellist | https://angel.co/ | Y | Y | |
| apple | https://jobs.apple.com |  | | Internship |
| chegg | https://www.internships.com | Y | | Computer Science |
| cisco | https://jobs.cisco.com |  | |  Intern, Various CS areas of interest |
| glassdoor | https://www.glassdoor.com |  | | Computer Science Intern |
| hawaiislack | https://jobs.hawaiitech.com/ |  | | Internship |
| idealist | https://www.idealist.org |  | | Internship |
| indeed | https://www.indeed.com/ |  | | Internship |
| linkedin | https://www.linkedin.com/ |  | | Computer Science |
| monster | https://www.monster.com | | | Computer Science Intern |
| nsf_reu | https://www.nsf.gov/crssprgm/reu | | | |
| simplyhired | https://www.simplyhired.com | | | Internship |
| stackoverflow | https://stackoverflow.com/jobs | | | Internship |
| soc | https://studentopportunitycenter.com | | Y | Computer Science Internship |
| ziprecruiter | https://www.ziprecruiter.com | | | Honolulu Internship |

For sites listed as "Attend?", the developer must be present as the scraper runs in order to respond to prompts from the site at various points.  All other sites can be run "unattended".

For sites listed as "Login?", the developer must establish a login and password for the site, and provide those credentials in a config file.  See the [Installation](./installation) page for details on how to do this.

## Run an individual scraper

All the above scrapers can be run individually in order to support development and maintenance.  To do so, invoke:

```
npm run scrapers [<name>|unattended] [dev|prod] [open|closed]
```

Replace `<name>` by the scraper name listed above.

If you specify `dev`, then a significant amount of logging data will be output.  If you specify `production`, then only errors during scraping will generate output.

If you specify `open`, then a browser window will open on your screen and allow you to monitor the process of scraping.  If you specify `closed`, then no browser window will be displayed.

## Run all scrapers that support unattended mode

To run all scrapers that do not require supervision, specify "unattended".  Usually, you will also want to generate statistics on the run as well. Here is the command:

```
npm run scrapers unattended --save statistics
```

## Saving Statistics

The `--save statistics` argument generates useful statistics about the performance of a scraper and appends them to a CSV file.  Over time, this file will provide a history of that scraper's performance. This information includes:

  * The timestamp of when the scraping session began
  * The total number of entries it found from the site.
  * The number of those entries for which it collected canonical data fields.

The goal of these historical statistics is to help us detect when the performance of a scraper degrades (i.e. is not finding listings) but not in a way that results in an error.

## Run a scraper that requires attended mode

You must run each scraper that requires attended mode individually. Use the following command:

```
npm run scrapers <name> dev open --save statistics
```

You must run the scraper in `open` mode so you can respond to recaptchas or other requests for human interaction.



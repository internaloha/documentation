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
| nsf-reu | https://www.nsf.gov/crssprgm/reu | | | |
| simplyhired | https://www.simplyhired.com | | | Internship |
| stackoverflow | https://stackoverflow.com/jobs | | | Internship |
| soc | https://studentopportunitycenter.com | | Y | Computer Science Internship |
| ziprecruiter | https://www.ziprecruiter.com | | | Honolulu Internship |

For sites listed as "Attend?", the developer must be present as the scraper runs in order to respond to prompts from the site at various points.  All other sites can be run "unattended".

For sites listed as "Login?", the developer must establish a login and password for the site, and provide those credentials in a config file.  See the [Installation](./installation) page for details on how to do this.

## Run an individual scraper

All of the above scrapers can be run individually in order to support development and maintenance.  To do so, invoke:

```
$ npm run scrapers <name> [dev|production] [open|closed]
```

Replace `<name>` by the scraper name listed above.

If you specify `dev`, then a significant amount of logging data will be output.  If you specify `production`, then only errors during scraping will generate output.

If you specify `open`, then a browser window will open on your screen and allow you to monitor the process of scraping.  If you specify `closed`, then no browser window will be displayed.

## Run all scrapers that support unattended mode

To run all scrapers that do not require supervision, simply omit the scraper name:

```
$ npm run scrapers [dev|production] [open|closed]
```

For normal site management, the preferred command is `npm run scrapers production closed`.

As before, specify `dev` vs. `production` to indicate the amount of logging output, and `open` vs. `closed` to indicate if you wish a browser window to open.

## Run a scraper that requires attended mode

You must run each scraper that requires attended mode individually. Use the following command:

```
$ npm run scrapers <name> [dev|production] open
```

You can choose `dev` or `production`, but you must run the scraper in `open` mode so you can respond to recaptchas or other requests for human interaction.



---
title: Run Scrapers
---

Some scrapers can be run in "unattended" mode, which means you can invoke a command and not have to monitor execution. Other scrapers must be run in "attended" mode, which means the website will require you to enter a recaptcha at various points to confirm that you are not a robot.

Prior to running scrapers, be sure to have set up the config.json file as noted in the Installation chapter.

## Unattended Scrapers

We provide three commands to run the scrapers that do not require supervision.

| Script | Explanation |
| ------- | ----- |
|  `npm run scrapers dev open` |  Runs unattended scrapers in development mode and opens browser for each scraper. |
|  `npm run scrapers dev close` |  Runs unattended scrapers in development mode, does not open up browser. |
|  `npm run scrapers production` |  Runs unattended scrapers in production mode, does not open up browser.|


There are two basic differences between development mode and production mode. First, in development mode, you can choose whether to open a browser window for each scraper. (This is very useful for debugging the scraper.) Second, development mode produces a significant amount of logging output useful for tracing the execution of the scraper, while production mode limits output to just errors.

#### Sites that require unattended mode:
* Apple
* ACM
* AExpress
* Cisco
* Glassdoor
* HawaiiSlack
* Indeed
* Idealist
* Linkedin
* Monster
* NSF-REU
* SimplyHired
* ZipRecruiter

## Attended Scrapers

The following scrapers must be run in attended mode so that the user can enter recaptchas as necessary. 

#### Sites that require attended mode: 
| Script | Explanation |
| ------- | ----- |
|  `npm run scrapers angellist dev open` | angellist |
|  `npm run scrapers chegg dev open` | Chegg (Internships) |

## Running Scrapers Individually

To run the scraper individually, the following commands are provided:

eg. `npm run scrapers apple dev open`

| Script | Explanation |
| ------- | ----- |
|  `npm run scrapers scraperName dev open` |  Runs the scraper in development mode and opens browser. |
|  `npm run scrapers scraperName dev close` |  Runs the scraper in development mode, does not open up browser. |

#### Legal inputs:
* apple
* acm
* aexpress
* angellist
* cisco
* glassdoor
* hawaiislack
* indeed
* chegg
* idealist
* linkedin
* monster
* nsf_reu
* simplyhired
* ziprecruiter





---
title: Install Scrapers
---

![ci-badge](https://github.com/internaloha/internaloha/workflows/internaloha-scrapers/badge.svg)

Here is how to install the InternAloha scrapers for development and how to run them and integrate the results into the UI.

## Install scrapers

To install the system, first [install NPM](https://www.npmjs.com/get-npm), then checkout [InternAloha](https://github.com/internaloha/internaloha) from GitHub.

Next, cd into internaloha\scraper\scrapers and run ``npm install``:

```
$ npm install
npm WARN @reach/router@1.3.4 requires a peer of react@15.x || 16.x || 16.4.0-alpha.0911da3 but none is installed
. You must install peer dependencies yourself.
npm WARN @reach/router@1.3.4 requires a peer of react-dom@15.x || 16.x || 16.4.0-alpha.0911da3 but none is insta
lled. You must install peer dependencies yourself.
npm WARN @testing-library/user-event@7.2.1 requires a peer of @testing-library/dom@>=5 but none is installed. Yo
u must install peer dependencies yourself.
npm WARN create-react-context@0.3.0 requires a peer of react@^0.14.0 || ^15.0.0 || ^16.0.0 but none is installed
. You must install peer dependencies yourself.
npm WARN eslint-config-airbnb@18.2.0 requires a peer of eslint-plugin-react@^7.20.0 but none is installed. You m
ust install peer dependencies yourself.
npm WARN eslint-config-airbnb@18.2.0 requires a peer of eslint-plugin-react-hooks@^4 || ^3 || ^2.3.0 || ^1.7.0 b
ut none is installed. You must install peer dependencies yourself.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.1.3 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.1.3: wanted {"os":"darwin","ar
ch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.13 (node_modules\watchpack-chokidar2\node_modules\f
sevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.13: wanted {"os":"darwin","a
rch":"any"} (current: {"os":"win32","arch":"x64"})

audited 774 packages in 3.257s

40 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

It should now be possible to run the various scraper scripts within the /scrapers directory.

## Running a scraper

To run a scraper, invoke an npm script:

| Script | Site | Notes |
| ------- | ----- | --- |
|  `npm run acm` |  https://jobs.acm.org | |
|  `npm run aexpress` |  https://jobs.americanexpress.com/jobs | |
|  `npm run angellist` |  https://angel.co/ | Login required |
|  `npm run apple` |  https://jobs.apple.com |
|  `npm run glassdoor` |  https://www.glassdoor.com |
|  `npm run ihiretechnology` |  https://www.ihiretechnology.com |
|  `npm run idealist computer science` |  https://www.idealist.org | Search term required
|  `npm run indeed` |  https://www.indeed.com |
|  `npm run linkedin` |  https://www.linkedin.com/jobs |
|  `npm run monster computer science` |  https://www.monster.com | Search term required
|  `npm run simply computer science` |  https://www.simplyhired.com/ | Search term required
|  `npm run stackoverflow` |  https://stackoverflow.com/jobs |
|  `npm run zip` |  https://www.ziprecruiter.com/ |

In order to run a scraper, cd into \scrapers and invoke the desired script. For example, running the scraper for LinkedIn is as follows:

```
$ npm run linkedin
```
This should bring up a Chromium window that will start the scraping process. After fully scraping a website, the results can be found within the \scraper\data\canonical folder.

## Parsing scraped data for display

### npm run multi-parse

All newly scraped data must be parsed using `npm run multi-parse` to convert it into a form appropriate for display in the website. This script goes through the data and extracts relevant information about skills, qualifications, compensation, and start/end date for each internship posting. It also ensures that each file is in the correct format. Results are stored in `/src/src/data` and statistics are updated.

### npm run single-parse

Extracts relevant information about skills, qualifications, compensation, and start/end date for
 a single file. At the moment, you must change the variables to parse the file you want:

 ```jsx
const rawData = fs.readFileSync('./data/canonical/angellist.canonical.data.json');
const text = JSON.parse(rawData);
...
fs.writeFile('data/parsed/angellist.parsed.data.json',
    JSON.stringify(text, null, 4), 'utf-8',
    err => (err ? console.log('\nData not written!', err) :
        console.log('\nData successfully written!')));
```

### npm run statistics

This script creates a file containing relevant information about each site that was scraped. The numbers correspond to how many fields were **not** empty.
 
```json
{
  "site": "Total",
  "lastScraped": "2020-09-04T00:45:30.335Z",
  "entries": 3286,
  "position": 3284,
  "company": 3284,
  "contact": 417,
  "location": 3286,
  "posted": 2772,
  "due": 93,
  "start": 98,
  "end": 0,
  "compensation": 811,
  "qualifications": 1295,
  "skills": 3240,
  "description": 3284
}
``` 
  
You have to manually add any new site so its statistics are generated.

```javascript
const zipData = readFile('./data/parsed/ziprecruiter.parsed.data.json');
const simplyData = readFile('./data/parsed/simplyhired.parsed.data.json');

let data = [];
data = _.concat(zipData, simplyData);
data = _.concat(data, cheggData);

statistics.push(
    getStatistics('Glassdoor', glassData),
    getStatistics('Indeed', indeedData),
    getStatistics('Total', data),
)
...
```

## Scraper script details

### SimplyHired
 
`npm run simply [search query]`. For example:  `npm run simply computer science`.

Result from the run is available at: [simplyHiredData.json](https://github.com/radgrad/internbit/blob/master/src/scrapers/data/canonical/simplyHired.canonical.data.json)

Current filters:
  * Date Relevance: 10 days
  * Any distance
 
### Idealist

`npm run idealist [search query]`

Result from the run is available at: [simplyHiredData.json](https://github.com/radgrad/internbit/blob/master/src/scrapers/data/canonical/idealist.canonical.data.json)
        
### Internships (Chegg)

`npm run internships [search query]`

Result from the run is available
 at: [internships.data.json](https://github.com/radgrad/internbit/blob/master/src/scrapers/data/canonical/internships.canonical.data.json)

Notes:
  * At the moment it doesn't work because of the reCATPCHA issue.
  * Unfortunately, [internships.com](https://www.internships.com/app/search) uses infinite scroll. Each internship doesn't have an associated URL link (like zipRecruiter) to its page so I have to click back and forth between the the listing and the main search page so it is slow. It takes roughly ~20 minutes to scrape 250 listings.
  * Current filters:
    * Hawaii
    * Sorted by Date

### Monsters.com

```npm run monster [search query]```. For example:  ``npm run monster computer science intern``

Results from the run is available at: [monster.data.json](https://github.com/radgrad/internbit/blob/master/src/scrapers/data/canonical/monster.canonical.data.json)

Current filters:
  *  Only show jobs posted within last 30 days

### LinkedIn

Run ```npm run linkedin``` to start the script.

Result from the run is available at: [linkedin.data.json](https://github.com/radgrad/internbit/blob/master/src/scrapers/data/canonical/linkedin.canonical.data.json)

Filters:
  * Only shows internships listed within last 30 days
  * Only show those listed as internships
  * Sorted by last posted

### StackOverflow

Run ```npm run stackoverflow``` to start the script.

Result from the run is available at: [stackoverflow.data.json](https://github.com/radgrad/internbit/blob/master/src/scrapers/data/canonical/stackoverflow.canonical.data.json)

## Creating a new scraper

InternAloha uses puppeteer to direct through an instance of a website in order to scrap a website. A video to understand the basics of puppeteer and website scraping can be seen [here](https://youtu.be/IvaJ5n5xFqU).

A couple of functions were implemented to simplify scraper code and is recommended to use to keep consistent coding: ``fetchInfo`` and ``autoScroll`` located at /scrapers/scraperFunction.js


---
title: Install Scrapers
---

Here is how to install the InternAloha scrapers for development and how to run them and integrate the results into the UI.

## How to Install Scrapers

To install the system, first [install NPM](https://www.npmjs.com/get-npm).

Using a newly created repository, cd into \scraper\scrapers and run ``npm install`` to download the correct libraries the scrapers' ``package.json`` file. 

```
C:\Users\ajrui\OneDrive\Documents\GitHub\internaloha\scraper\scrapers>npm install
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

If done correctly, it should be possible to run the various scraper scripts within the /scrapers directory.

## Running A Scraper 

Different scripts for each scraper can be found within the ``package.json`` file under ``scraper`` folder. 

```

"scripts": {
    "test": "node test.js",
    "eject": "react-scripts eject",
    "lint": "eslint --quiet --ext .jsx --ext .js ./src",
    "statistics": "node scrapers/statistics.js",
    "internships": "node scrapers/internships.js",
    "simply": "node scrapers/simplyHired.js",
    "zip": "node scrapers/zipRecruiter.js",
    "idealist": "node scrapers/idealist.js",
    "indeed": "node scrapers/indeed.js",
    "monster": "node scrapers/monster.js",
    "linkedin": "node scrapers/linkedin.js",
    "single-parse": "node scrapers/single_parser.js",
    "youtern": "node scrapers/Youtern.js",
    "cool": "node scrapers/Cooworks.js",
    "stackoverflow": "node scrapers/stackoverflow.js",
    "glassdoor": "node scrapers/Glassdoor.js",
    "ihire": "node scrapers/iHireTechnology.js",
    "angellist": "node scrapers/angellist.js",
    "acm": "node scrapers/acm.js",
    "coolworks": "node scrapers/Coolworks.js",
    "aexpress": "node scrapers/aexpress.js",
    "hn": "node scrapers/hn.js",
    "apple": "node scrapers/apple.js",
    "multi-parse": "node scrapers/multi_parser.js && node scrapers/statistics.js"
  },
  
```

In order to run a scraper, cd into \scrapers and ``npm run -script title-`` 

For example, running the scraper for LinkedIn is as follows:

```

C:\Users\ajrui\OneDrive\Documents\GitHub\internaloha\scraper\scrapers>npm run linkedin

```
This should bring up a Chromium window that will start the scraping process. After fully scraping a website, the results can be found within the \scraper\data\canonical folder

## Displaying Scraped Data to Website UI

All newly scraped data must be parsed using ```npm run multi-parse``` to transfer into the website database. This script goes through all canonical data and uses NLP/Regex to extract relevant information about skills, qualifications, compensation, and start/end date for each internship posting. It also ensures that each file is the correct format so it does not break the site. Once it is done, the new files are saved under ```/src/src/data``` and statistics are updated.  

**Single-Parse:** ```npm run single-parse```
Extracts relevant information about skills, qualifications, compensation, and start/end date for
 a single file. At the moment, you must change the variables to parse the file you want:
 ```jsx harmony
const rawData = fs.readFileSync('./data/canonical/angellist.canonical.data.json');
const text = JSON.parse(rawData);
...
fs.writeFile('data/parsed/angellist.parsed.data.json',
    JSON.stringify(text, null, 4), 'utf-8',
    err => (err ? console.log('\nData not written!', err) :
        console.log('\nData successfully written!')));
```

**Statistics:** ```npm run statistics``` 
This script provides relevant information about each site that was scraped. The numbers
 correspond to how many fields were **not** empty. 
 
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
  
You have to manually add the newly listed site
  so its statistics are generated.   
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

## Current Scrapers

The following scrapers require a search query parameter (Eg. ```npm run simply computer science```): 
- SimplyHired
- Internships (Chegg)
- Monsters.com
- Idealist

The following scrapers do not require any parameters:
- Glassdoor
- Stackoverflow
- LinkedIn
- YouTern
- iHireTechnology
- Indeed
- AmericanExpress
- ACM
- Apple
- Coolworks

The following scrapers require login in parameters:
- AngelList


**SimplyHired:** 
 
 ```npm run simply [search query]```. For example:  ``npm run simply computer
 science``. Result from the run is available at: [simplyHiredData.json](https://github.com/radgrad/internbit/blob/master/src/scrapers/data/canonical/simplyHired.canonical.data.json)
 * Current filters:
    * Date Relevance: 10 days
    * Any distance
 
**Idealist:**

```npm run idealist [search query]```. Result from the run is available at: [simplyHiredData.json](https://github.com/radgrad/internbit/blob/master/src/scrapers/data/canonical/idealist.canonical.data.json)
        
**Internships (Chegg):** 

```npm run internships [search query]```.  Result from the run is available
 at: [internships.data.json](https://github.com/radgrad/internbit/blob/master/src/scrapers/data/canonical/internships.canonical.data.json)
   * **At the moment it doesn't work because of the reCATPCHA issue**
   * Unfortunately, [internships.com](https://www.internships.com/app/search) uses infinite scroll. Each internship
       doesn't have an associated URL link (like zipRecruiter) to its page so I have to click back and
        forth between the the listing and the main search page so it is slow. It takes roughly ~20
         minutes to scrape 250 listings.
   * Current filters:
      * Hawaii
      * Sorted by Date

**Monsters.com:**

```npm run monster [search query]```. For example:  ``npm run monster computer
 science intern`` Result from the run is available at: [monster.data.json](https://github.com/radgrad/internbit/blob/master/src/scrapers/data/canonical/monster.canonical.data.json)
*  Current filters:
   *  Only show jobs posted within last 30 days

**LinkedIn:** 

Run ```npm run linkedin``` to start the script.
           Result from the run is available at: [linkedin.data.json](https://github.com/radgrad/internbit/blob/master/src/scrapers/data/canonical/linkedin.canonical.data.json)         
 * Filters:
    * Only shows internships listed within last 30 days
    * Only show those listed as internships
    * Sorted by last posted

**StackOverflow:** 

Run ```npm run stackoverflow``` to start the script.
Result from the run is available at: [stackoverflow.data.json](https://github.com/radgrad/internbit/blob/master/src/scrapers/data/canonical/stackoverflow.canonical.data.json)
                  
**GlassDoor:**

Run ```npm run glassdoor``` to start the script. Result from the run is available at: [stackoverflow
.data.json](https://github.com/radgrad/internbit/blob/master/src/scrapers/data/canonical/glassdoor.canonical.data.json)


## Building A Scraper

InternAloha uses puppeteer to direct through an instance of a website in order to scrap a website. A video to understand the basics of puppeteer and website scraping can be seen [here](https://youtu.be/IvaJ5n5xFqU).

A couple of functions were implemented to simplify scraper code and is recommended to use to keep consistent coding: ``fetchInfo`` and ``autoScroll`` located at /scrapers/scraperFunction.js


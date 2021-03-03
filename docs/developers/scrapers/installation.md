---
title: Install Scrapers
---

<a href="https://github.com/internaloha/internaloha/actions?query=workflow%3Ainternaloha-scrapers"><img src="https://github.com/internaloha/internaloha/workflows/internaloha-scrapers/badge.svg"/></a>

Installation of scrapers involves installing third party libraries through NPM and setting up a configuration file with credentials.

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

## Setup config file

Make a copy of `sample.config.json` and rename it to `config.json`. Some scrapers like angellist or Student
Opportunity Center requires credentials. Make an account on those sites and fill in the credentials in `config.json`.

Note that `config.json` will **not** be committed to the repository.

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

It should now be possible to run the various scrapers as documented in the next chapter.


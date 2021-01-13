---
title: Install UI
---

Here is how to install the InternAloha site for development, and how to deploy it for evaluation.

## Installation

To install the system, first [install NPM](https://www.npmjs.com/get-npm).

Second, download your newly created repository to your computer.

Third, type ``npm install`` to download the correct libraries. The repo is split up in the
following way:
- scraper: contains all the scrapers and scraped data
- src: the actual static site

Each of the folder has its own ``package.json``. This installation is regarding the UI so cd into ``\src``

```

C:\Users\JenniferHsu\Documents\GitHub\internaloha\src>npm install
npm WARN eslint-config-airbnb@18.2.0 requires a peer of eslint-plugin-import@^2.21.2 but none is installed. You must install peer dependencies yourself.
npm WARN eslint-config-airbnb@18.2.0 requires a peer of eslint-plugin-jsx-a11y@^6.3.0 but none is installed. You must install peer dependencies yourself.
npm WARN eslint-config-airbnb@18.2.0 requires a peer of eslint-plugin-react@^7.20.0 but none is installed. You must install peer dependencies yourself.
npm WARN eslint-config-airbnb-base@14.2.0 requires a peer of eslint-plugin-import@^2.21.2 but none is installed. You must install peer dependencies yourself.
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@2.1.2 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@2.1.2: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.13 (node_modules\jest-haste-map\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.13: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.13 (node_modules\watchpack-chokidar2\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.13: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.13 (node_modules\webpack-dev-server\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.13: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

audited 1829 packages in 25.501s

96 packages are looking for funding
  run `npm fund` for details

found 2 vulnerabilities (1 low, 1 high)
  run `npm audit fix` to fix them, or `npm audit` for details
```


If all goes as planned, you should now be able to run `npm start` to view the system in your browser at http://localhost:3000/:

```
$npm start

Compiled successfully!

You can now view src in the browser.

  Local:            http://localhost:3000
  On Your Network:  http://10.0.1.21:3000

Note that the development build is not optimized.
To create a production build, use npm run build.
```

Here is what the running system should look like:

<img width='1000px' src="/./documentation/img/internaloha.home.png"/>

## Deploying the site

To deploy the site, invoke `npm run deploy`. For example:

```
npm run deploy

> src@0.1.0 predeploy /Users/philipjohnson/github/radgrad/internbit-ui-template/src
> npm run build


> src@0.1.0 build /Users/philipjohnson/github/radgrad/internbit-ui-template/src
> react-scripts build

Creating an optimized production build...
Compiled successfully.

File sizes after gzip:

  95.63 KB          build/static/css/2.7db008ac.chunk.css
  60.12 KB (+14 B)  build/static/js/2.2a7dfe1b.chunk.js
  768 B             build/static/js/runtime-main.cf30d0f8.js
  605 B (+68 B)     build/static/js/main.cebf140d.chunk.js
  217 B             build/static/css/main.467e710e.chunk.css

The project was built assuming it is hosted at ./.
You can control this with the homepage field in your package.json.

The build folder is ready to be deployed.

Find out more about deployment here:

  bit.ly/CRA-deploy


> src@0.1.0 deploy /Users/philipjohnson/github/radgrad/internbit-ui-template/src
> gh-pages -d build

Published
```

When the system is published, it will be available under https://internaloha.github.io/internaloha.

If the script fails with an authentication error, the simplest solution I've found is to run `git push origin src` on the command line. That will prompt you for your username and password and cache those values for a while so that the script will now succeed.

**Important Note**: `npm run deploy` only commits and pushes the "master" branch of the repository, which contains the rendered version of the site. It does NOT commit the "src" branch of the repository. So, make sure that you push your changes to the src branch to GitHub as well using your git client of choice.

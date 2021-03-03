---
title: Deployment
---

To deploy the site, first make sure that GIT_USER is set. Then, invoke `npm run deploy`. For example:

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

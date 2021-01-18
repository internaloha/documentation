---
title: Javascript and ESLint Checklist
sidebar_label: JS, ESLint
---

Javascript and ESLint best practices.

## Javascript

### JS-01: Name classes, components, files, and directories appropriately.

Classes should be pascalcase starting with a capital letter.
  * Example: CourseInstance

React components should be pascalcase starting with a capital letter.
  * Example: AcademicView

Functions and arrow functions should be camelcase starting with a lowercase letter.
  * Example: findUser

Filenames for classes, scrapers, and React components should follow the rules for the classes or components.
  * Example: AcademicView.tsx, Acm.js, Apple.js, ZipRecruiter.js

Filenames for helpers should be lowercase with dashes between words. These files should be in a utilities directory.
  * Example: ui/pages/utilities/explorer-helpers.ts

Filenames for scraper data should be lowercase, with dashes as necessary for multi-word files.  Periods used to create "categories" of files (i.e. "canonical", "parsed", etc.
  * Example: apple.canonical.data.json. i-hire-tech.canonical.data.json, usa-cities.json.

Directory names are lowercase with dashes between words.
  * Example: ui/components/students/item-view

### JS-02: Avoid lodash map, filter, etc.

ES6 includes many of the lodash functions. Use the built-in function rather than the lodash version when possible.

### JS-03: Avoid console.log

Console.log is useful for certain situations in development. All console.log statements should be commented out in master.

We should consider adopting a lightweight logging package such as [js-logger](https://www.npmjs.com/package/js-logger). That way we can toggle log messages in and out as needed.

### JS-04: Avoid Immediately Invoked Async Function Expressions

Some scrapers contain code like this:

```js
(async () => {
  try {
    await playTest('https://angel.co/login');

  } catch (err) {
    console.log('Our Error: ', err.message);
  }
  //process.exit(1);
})();
```

The effect of this code is to define a function and immediately invoke it.  This is a little hard for new JS developers to understand. Replace with a more simple approach that defines a "main" function and invokes it:

```js
async function main() {
 try {
     await playTest('https://angel.co/login');

   } catch (err) {
     console.log('Our Error: ', err.message);
   }
   //process.exit(1);
 }
}
main();
```

For more information, see [IIAFE](https://2ality.com/2016/10/async-function-tips.html#immediately-invoked-async-function-expressions).

### JS-05: Conserve editor window real estate.

When there is no loss of readability, put code on a single line.

For example, objects as parameters can often be collapsed onto a single line. For example, the following four lines of code:

```
await page.setViewport({
  width: 1050,
  height: 800,
});
```

can be reduced to a single link of code, which is just as readable (if not more readable):

```
await page.setViewport({ width: 1050, height: 800 });
```

### JS-06: Don't use try-catch for control flow

Throwning exceptions should be reserved for error conditions, not as a way to perform control flow. For example:

```
let nextPage = true;
while (nextPage === true) {
  try {
    await page.waitForSelector('div[class="mux-search-results"]');
    await page.click('a[id="loadMoreJobs"]');
  } catch (e2) {
    nextPage = false;
  }
}
```

This loop requires an error to be thrown.  Instead, check to see if the relevant link exists and set nextPage accordingly. Here's some pseudocode:

```
while (page.selectorExists('a[id="loadMoreJobs"]') {
  await page.waitForSelector('div[class="mux-search-results"]');
  await page.click('a[id="loadMoreJobs"]');
}
```

### JS-07: Prefer ternary operator

If you see code like this:

```
const foo;
if (bar === 12) {
  foo = 'bar';
} else {
  foo = 'baz';
}
```

Please rewrite these six lines of code into one:

```
const foo = (bar === 12) ? 'bar' : 'baz';
```
## ESLint

### ESLINT-01: No errors, avoid warnings.

Are there ESLint errors or warnings that should be removed?

### ESLINT-02: Consider modifying our standards.

Based upon your review of code, should we be modifying the set of ESLint rules?



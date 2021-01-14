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

## ESLint

### ESLINT-01: No errors, avoid warnings.

Are there ESLint errors or warnings that should be removed?

### ESLINT-02: Consider modifying our standards.

Based upon your review of code, should we be modifying the set of ESLint rules?



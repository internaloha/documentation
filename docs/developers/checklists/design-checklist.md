---
title: Design Checklist
sidebar_label: Design
---

Practices concerning the high-level design of functions that is not specific to React, Typescript, or Javascript.


### Design-01: Avoid deeply nested code.

Try to avoid nesting code more than 5 levels (i.e. 10 spaces of indentation). For example, here is an outline of some recent code:

```
function foo () {
  try {
    :
    if () {
      :
      while () {
        :
        try {
          :
          try {
            :
            for () {
              :
              try {
                // This code is indented 16 spaces!
              }
            }
          }
        }
      }
    }
  }
```

The solution is to refactor some of the nested code into separate function(s). This should make the code more readable. 

### Design-02: Eliminate dead code.

Is there unused/unreachable code?

### Design-03: Eliminate large comment blocks.

Is there a large amount of commented out code? If so, move it to the internaloha/archive/ directory.

### Design-04: Ensure comments are appropriate.

Are there unnecessary comments? Comments that describe the _how_? If so, eliminate them.

Is there complex and/or unintuitive code? Please add a comment to explain the _why_.

If you see improvements that cannot be made immediately, add a comment prefaced by "TODO:".

### Design-05: Ensure code is DRY.

Does the code conform to the Agile Maxim of "Do not Repeat Yourself"? The same code should not be repeated more than twice.

Note that this is true not only within a single file, but across all files of a system. For example, there is lots of repeated code in the various scraper files.

Fix this by refactoring either within the file or moving code to a library file and importing it.

### Design-06: Ensure reusable code is exported or made available in the appropriate place.

Are there reusable services, functions and components that are not made available for reuse? If so, please refactor them into a shared utilities file and export them.

For example, here is a piece of code that is likely to be reuseable

```js
  await fs.writeFileSync('./data/canonical/angellist.canonical.data.json', JSON.stringify(data, null, 4),
      (err) => {
        if (err) {
          console.log(err);
        }
      });
```

### Design-07: Move unused files to internaloha/archive.

In the event that a file is not in use or under active development (for example, a scraper that has been abandoned), move it to the internaloha/archive directory. That way the code is still accessable in case we want to look at it later, but not in the active code base which is confusing.

### Design-08: Modularize long code sections

Avoid loops with bodies that are many (i.e. 100*) lines long.  Avoid functions with bodies that are many (i.e. 100+) lines long. Avoid try-catch blocks with bodies that are many (i.e. 100+) lines long.

In these cases, try to extract functions that accomplish focused tasks and call a sequence of them instead. That should make the code easier to read.



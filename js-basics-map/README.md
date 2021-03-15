# JS-Basics-Map


## What
Run a series of tests to confirm logic of building blocks within JavaScript

### Testing Suites
1. JavaScript DataStructure Implementation
    1. Arrays:
      a. Transform Object with associated key values into elements of an Array

### Breakout
- Test Modules
  - [testcases.spec.js](./testcases.spec.js)
- Logic Modules
  - [index.js](./index.js)
```js
export const result = (input) => {
  return Object
          .entries(input)
          .reduce((state, newState) => [...state, ...newState], []);
 };
```

## Execution (Running Tests)

### One and Done

```bash
yarn test
```

### Run and Continue to re-evaluate on changes (i.e. Watch)
```bash
yarn test --watch
```

## Results
```bash
JavaScript DataStructure Implementation
    - Arrays: Convert from Associated Key Object into Array
      ✓ The input is Object with Record()<test = true> (1 ms)
      ✓ The result is an instance of 'Array' from input Object (1 ms)
      ✓ The result Array has elements from input object: ['test', true]

Test Suites: 1 passed, 1 total
Tests:       3 passed, 3 total
Snapshots:   0 total
Time:        0.873 s, estimated 1 s
Ran all test suites.
```

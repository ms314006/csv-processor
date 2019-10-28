# csv-processor

Hello! csv-processor is a package, it can help easy handle data and would it to be CSV file 🙌!

## Get Started

### Install

You can install this csv-processor from npm.

```js
npm install csv-processor
```

### Usage

```js
import csv from 'csv-processor';

// Initial data
const column = ['number', 'name'];
const data = [[1, 'Luka'], [2, 'Larry']];

// Generate and download CSV file!
csv.generaterCsv('fileName', column, data);
```
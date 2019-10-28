# csv-processor

[![Build Status](https://travis-ci.com/ms314006/csv-processor.svg?branch=master)](https://travis-ci.com/ms314006/csv-processor)
[![Coverage Status](https://coveralls.io/repos/github/ms314006/csv-processor/badge.svg?branch=master)](https://coveralls.io/github/ms314006/csv-processor?branch=master)

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
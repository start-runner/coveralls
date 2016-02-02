[![npm](https://img.shields.io/npm/v/start-coveralls.svg?style=flat-square)](https://www.npmjs.com/package/start-coveralls)
[![travis](http://img.shields.io/travis/start-runner/coveralls.svg?style=flat-square)](https://travis-ci.org/start-runner/coveralls)
[![deps](https://img.shields.io/gemnasium/start-runner/coveralls.svg?style=flat-square)](https://gemnasium.com/start-runner/coveralls)

[Coveralls](https://coveralls.io/) task for [Start](https://github.com/start-runner/start).

## Install

```
npm i -D start-coveralls
```

## Usage

Task is rely on LCOV report from [start-coverage](https://github.com/start-runner/coverage).

```js
// tasks.js
import Start from 'start';
import logger from 'start-simple-logger';
import clean from 'start-clean';
import files from 'start-files';
import mocha from 'start-mocha';
import * as coverage from 'start-coverage';
import coveralls from 'start-coveralls';
import istanbul from 'babel-istanbul';

const start = Start(logger());

export function cover() {
    return start(
        files('coverage/'),
        clean(),
        files('lib/**/*.js'),
        coverage.instrument(istanbul),
        files('test/**/*.js'),
        mocha(),
        coverage.report()
    );
}

export function travis() {
    return start(
        cover(),
        coveralls()
    );
}
```

```js
// package.json
"scripts": {
  "task": "babel-node node_modules/.bin/start tasks",
  "cover": "npm run task cover",
  "travis": "npm run task travis"
}
```

## Arguments

`coveralls(file)`

* `options` – [coveralls options](https://github.com/coveralls/coveralls-node/blob/master/bin/coveralls), `{ disable: 'search,gcov', file: 'coverage/lcov.info' }` by default

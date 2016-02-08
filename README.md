[![npm](https://img.shields.io/npm/v/start-coveralls.svg?style=flat-square)](https://www.npmjs.com/package/start-coveralls)
[![travis](http://img.shields.io/travis/start-runner/coveralls.svg?style=flat-square)](https://travis-ci.org/start-runner/coveralls)
[![coverage](https://img.shields.io/codecov/c/github/start-runner/coveralls.svg?style=flat-square)](https://codecov.io/github/start-runner/coveralls)
[![deps](https://img.shields.io/gemnasium/start-runner/coveralls.svg?style=flat-square)](https://gemnasium.com/start-runner/coveralls)
[![gitter](https://img.shields.io/badge/gitter-join_chat_%E2%86%92-00d06f.svg?style=flat-square)](https://gitter.im/start-runner/start)

[Coveralls](https://coveralls.io/) task for [Start](https://github.com/start-runner/start).

## Install

```
npm i -D start-coveralls
```

## Usage

```js
import Start from 'start';
import logger from 'start-simple-logger';
import files from 'start-files';
import clean from 'start-clean';
import mocha from 'start-mocha';
import * as coverage from 'start-coverage';
import coveralls from 'start-codecov';
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
        cover,
        coveralls()
    );
}
```

Task is rely on LCOV report from [start-coverage](https://github.com/start-runner/coverage).

See [documentation](https://github.com/start-runner/start#readme) for details.

## Arguments

`coveralls(file, options)`

* `file` – path to `lcov.info`, `'coverage/lcov.info'` by default
* `options` – [coveralls options](https://github.com/nickmerwin/node-coveralls/blob/master/lib/convertLcovToCoveralls.js), `{}` by default

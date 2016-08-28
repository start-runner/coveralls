# start-coveralls

[![npm](https://img.shields.io/npm/v/start-coveralls.svg?style=flat-square)](https://www.npmjs.com/package/start-coveralls)
[![linux build](https://img.shields.io/travis/start-runner/coveralls.svg?label=linux&style=flat-square)](https://travis-ci.org/start-runner/coveralls)
[![windows build](https://img.shields.io/appveyor/ci/start-runner/coveralls.svg?label=windows&style=flat-square)](https://ci.appveyor.com/project/start-runner/coveralls)
[![coverage](https://img.shields.io/codecov/c/github/start-runner/coveralls.svg?style=flat-square)](https://codecov.io/github/start-runner/coveralls)
[![deps](https://img.shields.io/gemnasium/start-runner/coveralls.svg?style=flat-square)](https://gemnasium.com/start-runner/coveralls)

[Coveralls](https://coveralls.io/) task for [Start](https://github.com/start-runner/start).

## Install

```
npm i -D start-coveralls
```

## Usage

```js
import Start from 'start';
import reporter from 'start-pretty-reporter';
import files from 'start-files';
import read from 'start-read';
import clean from 'start-clean';
import mocha from 'start-mocha';
import * as istanbul from 'start-istanbul';
import coveralls from 'start-coveralls';

const start = Start(reporter());

export function cover() {
    return start(
        files('coverage/'),
        clean(),
        files('lib/**/*.js'),
        istanbul.instrument(),
        files('test/**/*.js'),
        mocha(),
        istanbul.report()
    );
}

export function travis() {
    return start(
        cover,
        files('coverage/lcov.info'),
        read(),
        coveralls()
    );
}
```

This task relies on `[{ path, data, map }]` input and provides the same, see [documentation](https://github.com/start-runner/start#readme) for details.

## Arguments

`coveralls(options)`

* `options` – [coveralls options](https://github.com/nickmerwin/node-coveralls/blob/master/lib/convertLcovToCoveralls.js), `{}` by default

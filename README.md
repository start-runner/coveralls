# start-coveralls

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
import reporter from 'start-pretty-reporter';
import files from 'start-files';
import read from 'start-read';
import clean from 'start-clean';
import mocha from 'start-mocha';
import * as coverage from 'start-coverage';
import coveralls from 'start-coveralls';
import istanbul from 'babel-istanbul';

const start = Start(reporter());

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

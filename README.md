# metalsmith-html-tidy

A [Metalsmith](http://metalsmith.io) plugin that tidies HTML using [tidy-html5](https://www.npmjs.com/package/tidy-html5),
which is a JavaScript compilation of [Tidy](http://www.html-tidy.org/).

## Installation

```
$ npm install [--save] metalsmith-html-tidy
```

## Usage

```
const tidy = require('metalsmith-html-tidy');

metalsmith.use(tidy({
    pattern: '**/*html',
    tidyOptions {
      'indent-spaces': 4,
    }
}));
```

* `pattern` is a [multimatch](https://www.npmjs.com/package/multimatch) pattern. Default is `**/*.html` (any html file anywhere).
* tidyOptions include any of [Tidy's countless options](http://api.html-tidy.org/tidy/tidylib_api_5.1.25/quick_ref.html). Defaults are Tidy defaults plus...

  ```
  'indent': true,
  'indent-spaces': 2,
  'wrap': 0,
  'vertical-space': true,
  'quiet': true,
  'show-info': false,
  'show-warnings': false,
  ```

## Demo

```
$ cd demo
$ npm install
$ node build
$ diff src/untidy.html build/untidy.html
```

## Test

```
$ npm install
$ DEBUG=metalsmith-html-tidy npm test
```

## License
[MPL-2.0](https://www.mozilla.org/en-US/MPL/2.0/)

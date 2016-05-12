'use strict';

const log = require('debug')('metalsmith-html-tidy');
const multimatch = require('multimatch');
const tidy = require('tidy-html5').tidy_html5;

const defaults = {
    pattern: '**/*html',
    tidyOptions: {
        'indent': true,
        'indent-spaces': 2,
        'wrap': 0,
        'vertical-space': true,
        'quiet': true,
        'show-info': false,
        'show-warnings': false,
    },
};

function plugin(options){

    options = options || {};

    let pattern = defaults.pattern;
    if ('pattern' in options) {
        pattern = options.pattern;
    }

    const tidyOptions = Object.assign(defaults.tidyOptions, options.tidyOptions);
    log('using tidy options %o', tidyOptions);

    function tidyHtml(files, metalsmith, done) {
        let htmlFiles = multimatch(Object.keys(files), pattern);
        htmlFiles.forEach(function(fileName) {
            let contents = files[fileName].contents;
            let tidyContents = tidy(contents, tidyOptions);
            files[fileName].contents = tidyContents;
        });
        done();
    }

    return tidyHtml;
}

module.exports = plugin;

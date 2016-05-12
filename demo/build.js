const metalsmith = require('metalsmith');
const debug = require('metalsmith-debug');
const tidy = require('metalsmith-html-tidy');

metalsmith(__dirname)
    .use(debug())
    .use(tidy({
        tidyOptions: {
            'indent-spaces': 4,
        },
    }))
    .build(function(err, files) {
        if (err) { throw err; }
    });

'use strict';

const assert = require('assert');
const equal = require('assert-dir-equal');
const metalsmith = require('metalsmith');
const tidy = require('..');
const debug = require('metalsmith-debug');

describe('metalsmith-html-tidy', function() {

    it('should tidy untidy html', function(done) {
        let test_path ='test/fixtures/basic';
        metalsmith(test_path)
            .use(tidy())
            .build(function(err, files) {
                if (err) {
                    return done(err);
                }
                equal(test_path + '/expected', test_path + '/build');
                done();
            });
    });

    it('should accept a pattern', function(done) {
        let test_path ='test/fixtures/pattern';
        metalsmith(test_path)
            .use(tidy({
                pattern: '**/untidy.html',
            }))
            .build(function(err, files) {
                if (err) {
                    return done(err);
                }
                equal(test_path + '/expected', test_path + '/build');
                done();
            });
    });

    it('should accept tidy options', function(done) {
        let test_path ='test/fixtures/options';
        metalsmith(test_path)
            .use(tidy({
                tidyOptions: {
                    'indent-spaces': 4, // default is 2
                },
            }))
            .build(function(err, files) {
                if (err) {
                    return done(err);
                }
                equal(test_path + '/expected', test_path + '/build');
                done();
            });
    });
});

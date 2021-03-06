'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.rendr_stitch = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  sample: function(test) {
    test.expect(2);

    var actual = grunt.file.read('tmp/test/sample/bundle.js');
    var expected = grunt.file.read('test/expected/sample/bundle.js');
    test.equal(actual, expected, 'should generate a proper bundle.');

    actual = grunt.file.read('tmp/test/sample/other-bundle.js');
    expected = grunt.file.read('test/expected/sample/other-bundle.js');
    test.equal(actual, expected, 'should generate a 2nd bundle w/o dependencies.');

    test.done();
  },
};

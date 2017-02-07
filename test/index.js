process.chdir('test');
var tap = require('agraddy.test.tap')(__filename);

var mod = require('../');

tap.assert.equal(mod(new Date('2016-01-02 10:11:12')), '2016_01_02_10_11_12', 'Should be equal.');

tap.assert(mod(), 'Should return a result.');


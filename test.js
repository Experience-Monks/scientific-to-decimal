var scientificToDecimal = require('./.');
var tape = require('tape');

tape('big numbers', function(t) {
  t.equal(scientificToDecimal(1e+32), '100000000000000000000000000000000');
  t.equal(scientificToDecimal(4.345e+21), '4345000000000000000000');
  t.end();
});

tape('small numbers', function(t) {
  t.equal(scientificToDecimal(1e-9), '0.000000001');
  t.equal(scientificToDecimal(4.34e-14), '0.0000000000000434');
  t.end();
});


tape('other numbers', function(t) {
  t.equal(scientificToDecimal(33), '33');
  t.equal(scientificToDecimal(NaN), 'NaN');
  t.end();
});
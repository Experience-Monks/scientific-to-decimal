module.exports = function(value) {
  value = parseFloat(value);

  var REGEX_SCIENTIFIC = /(\d+\.?\d*)e\d*(\+|-)(\d+)/;
  var valueString = value.toString();
  var result = REGEX_SCIENTIFIC.exec(valueString);
  var base;
  var positiveNegative;
  var exponents;
  var precision;
  var rVal;


  // is scientific
  if(result) {
    // [ '1e+32', '1', '+', '2', index: 0, input: '1e+32' ]
    base = result[ 1 ];
    positiveNegative = result[ 2 ];
    exponents = result[ 3 ];

    if(positiveNegative === '+') {

      precision = parseInt(exponents);

      // base is a decimal
      if(base.indexOf('.') !== -1) {
        result = /(\d+\.)(\d)/.exec(base);

        // [ 2 ] == right side after decimal
        // [ 1 ] == left side before decimal
        precision -= result[ 2 ].length + result[ 1 ].length;

        rVal = base.split('.').join('') + getZeros(precision);
      } else {
        rVal = base + getZeros(precision);
      }
    } else {
      precision = base.length + parseInt(exponents) - 1;

      // if it contains a period we want to drop precision by one
      if(base.indexOf('.') !== -1) {
        precision--;
      }

      rVal = value.toFixed(precision);
    }
  } else {
    rVal = value.toString();
  }

  return rVal;
};

function getZeros(count) {
  var rVal = '';

  for(var i = 0; i < count; i++) {
    rVal += '0';
  }

  return rVal;
}
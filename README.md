# scientific-to-decimal

[![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)

A function which will convert scientific numbers to decimal strings.

## Usage

[![NPM](https://nodei.co/npm/scientific-to-decimal.png)](https://www.npmjs.com/package/scientific-to-decimal)

## Example
```javascript
scientificToDecimal(1e+32); // '100000000000000000000000000000000'
scientificToDecimal(4.345e+21); // '4345000000000000000000'
scientificToDecimal(1e-9); // '0.000000001')
scientificToDecimal(4.34e-14); // '0.0000000000000434'

// will handle other numbers also
scientificToDecimal(33); // '33'
scientificToDecimal(NaN); // 'NaN'
```

## License

MIT, see [LICENSE.md](http://github.com/mikkoh/scientific-to-decimal/blob/master/LICENSE.md) for details.

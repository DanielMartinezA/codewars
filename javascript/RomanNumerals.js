/*
Create a RomanNumerals class that can convert a roman numeral to and from an integer value.
It should follow the API demonstrated in the examples below.
Multiple roman numeral values will be tested for each helper method.

Modern Roman numerals are written by expressing each digit separately starting with the
left most digit and skipping any digit with a value of zero.
In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC.
2008 is written as 2000=MM, 8=VIII; or MMVIII.
1666 uses each Roman symbol in descending order: MDCLXVI.

Input range : 1 <= n < 4000

In this kata 4 should be represented as IV, NOT as IIII (the "watchmaker's four").

Examples
RomanNumerals.toRoman(1000); // should return 'M'
RomanNumerals.fromRoman('M'); // should return 1000

XC = 90, not 110
IX = 9, not 11

Help
Symbol I | IV | V | IX |  X | XL |  L | XC |  C  |  CD |  D  |  CM |  M
Value  1 |  4 | 5 |  9 | 10 | 40 | 50 | 90 | 100 | 400 | 500 | 900 |1000

https://en.wikipedia.org/wiki/Roman_numerals
https://www.calculatorsoup.com/calculators/conversions/roman-numeral-converter.php
*/
class RomanNumerals {
  static valuesObj = {
    M:1000, CM:900, D:500, CD:400, C:100, XC:90,
    L:50, XL:40, X:10, IX:9, V:5, IV: 4, I:1
  }
  static toRoman(num) {
    return Object.entries(this.valuesObj).reduce((acc, c) => {
      if (num > 0) {
        let count = Math.trunc(num / c[1])
        num = num - count*c[1]
        return acc + c[0].repeat(count)
      } else {
        return acc
      }
    }, "")
  }
  static fromRoman(numString) {
    // Should replace this implementation with one that takes advantage of how
    // roman numerals are formed: (thousands)(hundreds)(tens)(units)
    let i = 0
    return Object.entries(this.valuesObj).reduce((acc, c) => {
      if (i < numString.length) {
        if (c[0].length === 2) {
          let count = 0
          while ( (i < numString.length) && (c[0] === (numString[i] + numString[i+1])) ) {
            count++
            i += 2
          }
          return acc + count*c[1]
        } else {
          let count = 0
          while ( (i < numString.length) && (c[0] === (numString[i])) ) {
            count++
            i += 1
          }
          return acc + count*c[1]
        }
      } else {
        return acc
      }
    }, 0)
  } // fromRoman
  
  /* Solution from other people */
  // this one is a shorter version of my own implementation using substrings
  static fromRoman1(s) {
    var v = 0;
    valuesObj.forEach(function(n) {
      while (s.substr(0, n[0].length) == n[0]) {
        s = s.substr(n[0].length);
        v += n[1];
      }
    });
    return v;
  }
}
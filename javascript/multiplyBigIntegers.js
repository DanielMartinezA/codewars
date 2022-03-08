/*
https://www.codewars.com/kata/55911ef14065454c75000062/train/javascript
This is the first part.
Second Part:
  https://www.codewars.com/kata/multiplying-numbers-as-strings-part-ii/javascript

Multiply two numbers! Simple!
  The arguments are passed as strings.
  The numbers may be way very large
  Answer should be returned as a string
  The returned "number" should not start with zeros e.g. 0123 is invalid
*/
function multiplyBigIntegers(a, b) {
  // remove leading zeros from a and b.
  // If a = "000", a becomes "0"
  a = a.replace(/^0+(?=\d)/,"")
  b = b.replace(/^0+(?=\d)/,"")
  if (a === "0" || b === "0") {
    return "0"
  } else if (a === "1") {
    return b
  } else if (b === "1") {
    return a
  } else {
    // long multiplication algorithm
    let ans = Array(a.length + b.length)
    for (let j = (b.length-1); j >= 0; j--) {
      let carry = 0
      for (let i = (a.length-1); i >= 0; i--) {
        ans[i+j+1] = carry + a[i]*b[j] + (ans[i+j+1] || 0)
        carry = Math.trunc(ans[i+j+1] / 10)
        ans[i+j+1] = ans[i+j+1] % 10
      }
      ans[j] = carry
    }
    return ans.join("").replace(/^0+(?=\d)/,"")
  }
}
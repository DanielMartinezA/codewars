/*
We need to sum big numbers and we require your help.

Write a function that returns the sum of two numbers.
The input numbers are strings and the function must return a string.

Example
  add("123", "321"); -> "444"
  add("11", "99");   -> "110"

Notes
  The input numbers are big.
  The input is a string of only digits
  The numbers are positives
*/
function sumBigIntegers(a, b) {
  let ans = []
  let carry = 0
  let maxLength = Math.max(a.length, b.length)
  for (let i = 1; i <= maxLength; i++) {
    let aDigit = (a.length - i) < 0 ? 0 : Number(a[a.length - i])
    let bDigit = (b.length - i) < 0 ? 0 : Number(b[b.length - i])
    let sum = aDigit + bDigit + carry
    ans[i-1] = sum % 10
    carry = Math.trunc(sum / 10)
  }
  if (carry > 0) {
    ans.push(1)
  }
  return ans.reverse().join("")
}
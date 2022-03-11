/*
Write a function named sumDigits which takes a number as input and returns
the sum of the absolute value of each of the number's decimal digits.

For example: (Input --> Output)
  10 --> 1
  99 --> 18
  -32 --> 5

Let's assume that all numbers in the input will be integer values.
*/
function sumDigits(number) {
  let ans = 0
  number = Math.abs(number)
  while (number) {
    ans += number % 10
    number = Math.trunc(number/10)
  }
  return ans
}
function sumDigits1(number) {
  return Math.abs(number).toFixed().split("").reduce((acc, c) => {
    return acc + Number(c)
  }, 0)
}
/*
https://www.codewars.com/kata/55983863da40caa2c900004e/train/javascript

Create a function that takes a positive integer and returns the NEXT BIGGER number
(not necessarily the biggest number) that can be formed by rearranging its digits.

For example:
12 ==> 21
513 ==> 531
2017 ==> 2071

nextBigger(num: 12)   // returns 21
nextBigger(num: 513)  // returns 531
nextBigger(num: 2017) // returns 2071

If the digits can't be rearranged to form a bigger number, return -1:
9 ==> -1
111 ==> -1
531 ==> -1
*/
function nextGreaterPermutation(num) {
  let numArray = String(num).split("")

  if (numArray.length == 1) {
    return -1
  }

  // find at what point there's a suffix that's not in descending order
  let index = numArray.length - 2
  while (index >= 0 && numArray[index] >= numArray[index + 1]) {
    index--
  }

  // if the whole number is in descending order, return -1
  if (index < 0) {
    return -1
  }

  let suffix = numArray.slice(index)
  // after finding the first suffix that's not in descending order
  // swap the suffix's first value with its next bigger one in the suffix
  let nextBiggerDigit = '9'
  let nextBiggerDigitIndex = 1
  for (let i = 1; i < suffix.length; i++) {
    if (suffix[i] > suffix[0] && suffix[i] < nextBiggerDigit) {
      nextBiggerDigit = suffix[i]
      nextBiggerDigitIndex = i
    }
  }

  // swap
  suffix[nextBiggerDigitIndex] = suffix[0]
  suffix[0] = nextBiggerDigit

  // create the new number prefix + suffix[0] + suffix.slice(1).sort()
  prefix = numArray.slice(0, index).join('')
  middle = suffix[0]
  suffix = suffix.slice(1).sort().join('')

  return Number(prefix + middle + suffix)
}

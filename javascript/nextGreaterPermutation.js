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
  let digits = String(num).split("")
  //digits.forEach((elem, index, arr) => {arr[index] = Number(elem)})
  // start by swapping the last two digits, that way, you are changing the number the least.
  // if (perm(last-two) > last-two) then return rest+perm(last-two)
  // else
  //  I put the next largest of the last three on the 3rd to last position and arrange the other two to form the lowest
  //  number
  //  If the 3rd to last number is already the highest of the last three, then I put the next largest number of the
  //  last four, in the 4rd to last position and arrange the other three to form the lowest number.
  let ans = -1
  let range = 2
  while (range <= digits.length) {
    if (range === 2) {

    }
  }
  return ans
}
function nextLargest2(num) {
  let digits = String(num).split("")
  if (digits[0] < digits[1]) {
    return Number(digits[1] + digits[0])
  } else {
    return -1
  }
}
function nextLargest3(num) {
  let digits = String(num).split("")
  if (digits[1] < digits[2]) {
    return Number(digits[0] + digits[2] + digits[1])
  } else {
    uniqueDigits = digits.sort()
    if (digits[0] !== uniqueDigits[uniqueDigits.length - 1]) {
      // i.e 271
    }
  }
}
// A brute force solution is to get an array with all the permutations of the number's digits, find the current
// number at position i and return the number at i+1 or -1 if it is the last one in the array.
// The number of permutations is n! i.e. for n=4, it's 4! = 24
/*
0127
0172
0217
0271
0712
0721
1027
1072
1207
1270
1702
1720
2017
2071-
2107-
2170
2701
2710
7012
7021
7102
7120
7201
7210
//---------------
[3,6,9]
93369
93396
93639
93693
93936
93963
93963


96369
*/
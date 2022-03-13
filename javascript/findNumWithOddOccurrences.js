/*
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples:
  [7] should return 7, because it occurs 1 time (which is odd).
  [0] should return 0, because it occurs 1 time (which is odd).
  [1,1,2] should return 2, because it occurs 1 time (which is odd).
  [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
  [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
*/
function findNumWithOddOccurrences(arr) {
  let countObj = {}
  arr.forEach(elem => countObj[elem] ? countObj[elem]++ : countObj[elem] = 1)
  return Number(Object.keys(countObj).find(key => countObj[key] % 2 !== 0))
}

/* Solution from other people */
const findOdd = (xs) => xs.reduce((a, b) => a ^ b);

// explanation
function findOdd(xs) {
  return xs.reduce((acc, c) => {
    return acc ^ c // acc =  acc Bitwise-XOR c ; acc = (acc + c) mod 2
  }, 0)
}
// acc starts as 00...0
// I iterate over the array adding each number to acc modulo 2.
// 00...0 XOR XX...X = XX...X
// Since XOR is commutative and associative, you can group all the XORs of the same number together.
// It's easy to see that the XOR of a number with itself is equal to 0
// Given this, any number that appears an even number of times will have its
// XOR result equal to zero.
// Thus, the only number that remains is the one that appears an odd number of times.

// Example of using commutative and associative property to group numbers
// a ^ b ^ a ^ b
// a ^ (b ^ (a ^ b)) // apply an order
// a ^ ((b ^ a) ^ b) // associative
// a ^ ((a ^ b) ^ b) // commutative
// a ^ (a ^ (b ^ b)) // associative
// (a ^ a) ^ (b ^ b) // associative
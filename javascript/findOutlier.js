/*
You are given an array (which will have a length of at least 3, but could be very large)
containing integers.
The array is either entirely comprised of odd integers or
entirely comprised of even integers except for a single integer N.

Write a method that takes the array as an argument and returns this "outlier" N.

Examples:
  [2, 4, 0, 100, 4, 11, 2602, 36] Should return: 11 (the only odd number)
  [160, 3, 1719, 19, 11, 13, -21] Should return: 160 (the only even number)
*/
function findOutlier(integers){
  for(let i = 0; i < (integers.length-1); i++) {
    if ((integers[i] + integers[i+1]) % 2 !== 0) { // when the sum of two consecutive numbers is odd
      // use a number that can't be the outlier to check if majority of numbers are even or odd
      if (integers[(i+2)%integers.length] % 2 === 0) {
        let ans = integers[i] % 2 === 0 ? integers[i+1] : integers[i]
        return ans
      } else {
        let ans = integers[i] % 2 === 0 ? integers[i] : integers[i+1]
        return ans
      }
    }
    [].f
  }
}

/* Solution from other people */
function findOutlier1(integers){
  const even = integers.filter(int => int % 2 === 0);
  const odd  = integers.filter(int => int % 2 !== 0);
  return even.length === 1 ? even[0] : odd[0];
}
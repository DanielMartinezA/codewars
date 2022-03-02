/*
If we list all the natural numbers below 10 that are multiples of 3 or 5,
we get 3, 5, 6 and 9.
The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5
below the number passed in.
Additionally, if the number is negative, return 0.

Note: If the number is a multiple of both 3 and 5, only count it once.
Courtesy of projecteuler.net (Problem 1)
*/
function sumOfMultiples3or5(number){
  let ans = 0
  if (number > 0) {
    for (let i = 1; i < number; i++)
      if (i % 3 === 0 || i % 5 === 0) {
        ans += i
    }
  }
  return ans
}

/* Solution from other people - it's O(1)!! */
function solution(number){
  var n3 = Math.floor(--number/3), n5 = Math.floor(number/5), n15 = Math.floor(number/15);
  return (3 * n3 * (n3 + 1) + 5 * n5 * (n5 + 1) - 15 * n15 * (n15+1)) /2;
}
// expanded and explained solution:
function solutionExp(number){
  function SAS(n, start, end) { //sumArithmeticSequence
    return n*(start+end)/2;
  }
  number = number-1;
  var numThree = Math.floor(number/3);
  var numFive = Math.floor(number/5);
  var numFifteen = Math.floor(number/15);
  
  return SAS(numFive, 5, 5*numFive) + SAS(numThree, 3, 3*numThree) - SAS(numFifteen, 15, 15*numFifteen);
}

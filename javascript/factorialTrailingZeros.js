/*
Write a program that will calculate the number of trailing zeros in a factorial of a given number.

N! = 1 * 2 * 3 * ... * N

Examples:
zeros(6) = 1
# 6! = 1 * 2 * 3 * 4 * 5 * 6 = 720 --> 1 trailing zero

zeros(12) = 2
# 12! = 479001600 --> 2 trailing zeros

Hint: You're not meant to calculate the factorial. Find another way to find the number of zeros.
Useful resources:
https://mathworld.wolfram.com/Factorial.html
https://oeis.org/A027868 - The number of trailing zeros in n! sequence
https://www.jstor.org/stable/27646601 - A simplified explanation of the problem
*/
function factorialTrailingZeros(num) {
  // We can count all the 10s we can build with all the factors
  // since the prime factorization of 10 is 2*5, and we'll have an overabundance of 2s
  // we can just count all the 5s in each factor multiple of five
  // Example: trailing zeros in 100!
  // We first check how many simple fives are in 100: floor(100/5) = 20
  // We then check how many double fives are in 100: floor(100/25) = 4
  // There are no triple fives or bigger, as 5^3 = 125 > 100
  // The number of trailing zeros will then be 20 + 4 = 24 zeros.
  // Note that we didn't do 20 + 4*2. The double fives count as one since we
  // already counted one of them when we counted the simple fives!
  // This same pattern applies for larger factorials.
  // We'll know up to what power of five to check by doing: kmax = floor(log5(num))
  // Which tells us whats the largest power of five that fits in our number
  let kmax = Math.floor(Math.log(num)/Math.log(5))
  let fives = 0
  for (let i = 1; i <= kmax; i++) {
    fives += Math.floor(num/(5**i))
  }
  return fives
}
function factorialTrailingZerosSLOW(num) {
  // We can count all the 10s we can build with all the factors
  // since the prime factorization of 10 is 2*5, and we'll have an overabundance of 2s
  // we can just count all the 5s in each factor multiple of five
  let fives = 0
  for (let i = 5; i <= num; i+=5) {
    let factor = i
    while (factor % 5 === 0) {
      fives++
      factor /= 5
    }
  }
  return fives
}

/* Solution from other people */
function zeros (n) {
  var zs = 0;
  while(n>0){
    n=Math.floor(n/5);
    zs+=n
  }
  return zs;
}
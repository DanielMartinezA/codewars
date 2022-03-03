/*
             1
          3     5
       7     9    11
   13    15    17    19 <--- level = 4
21    23    25    27    29
Calculate the sum of the numbers in the nth row of this triangle (starting at index 1)
e.g.: (Input --> Output)
1 -->  1
2 --> 3 + 5 = 8
*/
function oddTriangleNthLevelSum(level) {
  return level**3
}
/*
This can be taken as more of a math problem. Maybe if you need the solution right away and don't figure out the
pattern by calculating the sum for a few rows, you could implement a counting algorithm faster than doing the math.

An approach to the math solution is:
  - Write the nth odd number, odd_n = 2*n-1 ; for n=1 it's 1, n=2 it's 3
  - Find the sum of odd numbers from 1st to nth odd number: sum(2*i-1,i=1,i=n) = n^2 (you can use wolframalpha)
  - Calculate the sum of odd numbers up to the index of the last number in level.
  - Calculate the sum of odd numbers up to the index of the last number in level-1.
  - The answer is the difference of these two sums.
  - Since each level has one more number than the last, the last index in level 1 is 1,
    the last index in level 2 is 3 and so on.
  - So the index of the last number of each level is the sum of all the numbers up to that level.
  - This is the sum of natural numbers from one up to level, equal to (j)(j+1)/2 with j=level
  - Writing the steps down:
  - ((level)(level+1)/2)^2 - ((level-1)(level)/2)^2 = 
  - (1/4)*(level^2)*((level+1)^2 - (level-1)^2) = 
  - (1/4)*(level^2)*(4*level) = 
  - level^3
*/
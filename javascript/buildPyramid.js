/*
https://www.codewars.com/kata/576757b1df89ecf5bd00073b/train/javascript
Build Tower

Build a pyramid-shaped tower given a positive integer number of floors.
A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:
[
  "  *  ",
  " *** ", 
  "*****"
]

And a tower with 6 floors looks like this:
[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]
Build Tower Advanced:
https://www.codewars.com/kata/57675f3dedc6f728ee000256
*/
function buildPyramid(nFloors) {
  let ans = Array(nFloors)
  let aster = 1
  let spaces = nFloors - 1
  for (let i = 0; i < nFloors; i++) {
    ans[i] = " ".repeat(spaces) + "*".repeat(aster) + " ".repeat(spaces)
    aster += 2
    spaces--
  }
  return ans
}
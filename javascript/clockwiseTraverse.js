/*
Given an n x n array, return the array elements arranged from outermost elements to the middle element,
traveling clockwise.

array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
snail(array) #=> [1,2,3,6,9,8,7,4,5]

NOTE 2: The 0x0 (empty matrix) is represented as en empty array inside an array [[]].
*/
function clockwiseTraverse(matrix) {
  let ans = []

  if (matrix.length && matrix[0].length) {
    let stepsAllowed = matrix.length - 1
    let count = 3 // after first 3 turns, reduce stepsAllowed by one. Then after 2 turns
    let i = 0
    let j = 0
    ans.push(matrix[i][j])
    // Movement direction: Right
    let iStep = 0
    let jStep = 1
    while (stepsAllowed !== 0) {
      for (let count = 0; count < stepsAllowed; count++) {
        i += iStep
        j += jStep
        ans.push(matrix[i][j])
      }
      if (iStep === 0 && jStep === 1) { // was moving right
        iStep = 1
        jStep = 0
      } else if (iStep === 1 && jStep === 0) { // was moving down
        iStep = 0
        jStep = -1
      } else if (iStep === 0 && jStep === -1) { // was moving left
        iStep = -1
        jStep = 0
      } else if (iStep === -1 && jStep === 0) { // was moving up
        iStep = 0
        jStep = 1
      }
      count -= 1
      if (!count) {
        count = 2
        stepsAllowed -= 1
      }
    } // while
  } // if
  return ans
}

let array = [[1,2,3], [4,5,6], [7,8,9]]
console.log("The snail trail is:");
console.log(clockwiseTraverse(array));

/* Solution from other people */
function clockwiseTraverse1(array) {
  var result;
  while (array.length) {
    // Steal the first row.
    result = (result ? result.concat(array.shift()) : array.shift());
    // Steal the right items.
    for (var i = 0; i < array.length; i++)
      result.push(array[i].pop());
    // Steal the bottom row.
    result = result.concat((array.pop() || []).reverse());
    // Steal the left items.
    for (var i = array.length - 1; i >= 0; i--)
      result.push(array[i].shift());
  }
  return result;
}
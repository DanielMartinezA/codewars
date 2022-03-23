/*
You get an array of arrays.
If you sort the arrays by their length, you will see, that their length-values are consecutive.
But one array is missing!
You have to write a method, that return the length of the missing array.

Example:
[[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]] --> 3

If the array of arrays is null/nil or empty, the method should return 0.

When an array in the array is null or empty, the method should return 0 too!
There will always be a missing element and its length will be always between the given arrays. 
*/
function getLengthOfMissingArray(arrayOfArrays) {
  let ans = 0
  if (arrayOfArrays !== null && arrayOfArrays.length !== 0) {
    let minLength = Number.MAX_SAFE_INTEGER
    let maxLength = 0
    let lengthCount = 0
    let i = 0
    for (i; i < arrayOfArrays.length; i++) {
      if (arrayOfArrays[i] === null || arrayOfArrays[i].length === 0) {
        break
      } else {
        minLength = Math.min(minLength, arrayOfArrays[i].length)
        maxLength = Math.max(maxLength, arrayOfArrays[i].length)
        lengthCount += arrayOfArrays[i].length
      }
    }
    if (i >= arrayOfArrays.length) {
      ans = (maxLength - minLength + 1)*(maxLength + minLength)/2 - lengthCount
    }
  }
  return ans
}
/*
Richard Durstenfeld's modern algorithm of the Fisher–Yates shuffle; time complexity O(n)
-- To shuffle an array a of n elements (indices 0..n-1):
for i from n−1 downto 1 do
     j ← random integer such that 0 ≤ j ≤ i
     exchange a[j] and a[i]
*/

function shuffleStringFY(str) {
  let strArr = str.split("")
  for (let i = str.length-1; i > 0; i--) {
    let j = Math.floor(Math.random()*(i+1))
    let tmp = strArr[i]
    strArr[i] = strArr[j]
    strArr[j] = tmp
  }
  return strArr.join("")
}

// My naive implementation in O(n^2) time
function shuffleString(str) {
  let ans = Array(str.length)
  let strArr = str.split("")
  // Assign a letter from str to each position
  for (let i = 0; i < str.length; i++) {
    let max = 0
    let index = 0
    // assign a random value to each letter of strArr and add the
    // one with the highest value
    for (let j = 1; j < strArr.length; j++) {
      let value = Math.random()
      if (value > max) {
        max = value
        index = j
      }
    }
    ans[i] = strArr[index]
    strArr.splice(index,1)
  }
  return ans.join("")
}

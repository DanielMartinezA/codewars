/*
Take 2 strings s1 and s2 including only letters from ato z.
Return a new sorted string, the longest possible,
containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
  a = "xyaabbbccccdefww"
  b = "xxxxyyyyabklmopq"
  longest(a, b) -> "abcdefklmopqwxy"

  a = "abcdefghijklmnopqrstuvwxyz"
  longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/
function longest(s1, s2) {
  return ans = (s1+s2).split("").sort().filter((elem, index, arr) => {
    return (index === (arr.length-1)) || (elem !== arr[index+1])
  }).join("")
}

/* Solution from other people */
const longest1 = (s1, s2) => [...new Set(s1+s2)].sort().join('')
/*
Complete the solution so that it splits the string into pairs of two characters.
If the string contains an odd number of characters then it should replace the
missing second character of the final pair with an underscore ('_').

Examples:
* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']
*/
function splitStringInPairs(str) {
  let ans = Array(Math.ceil(str.length/2))
  for (let i = 0; i < str.length; i+=2) {
    let pair = str[i] + (str[i+1] ? str[i+1] : "_")
    ans[i/2] = pair
  }
  return ans
}

/* Solution from other people */
function solution(s){
  return (s+"_").match(/.{2}/g)||[]
}
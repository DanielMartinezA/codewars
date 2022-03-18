/*
You are given an array(list) strArr of strings and an integer k.
Your task is to return the first longest string consisting of k consecutive strings taken in the array.

Examples:
strArr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

Concatenate the consecutive strings of strArr by 2, we get:
treefoling   (length 10)  concatenation of strArr[0] and strArr[1]
folingtrashy ("      12)  concatenation of strArr[1] and strArr[2]
trashyblue   ("      10)  concatenation of strArr[2] and strArr[3]
blueabcdef   ("      10)  concatenation of strArr[3] and strArr[4]
abcdefuvwxyz ("      12)  concatenation of strArr[4] and strArr[5]

Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
The first that came is "folingtrashy" so 
longestConsec(strarr, 2) should return "folingtrashy".

In the same way:
longestConsec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"

n being the length of the string array, if n = 0 or k > n or k <= 0 return "" (return Nothing in Elm).
Note

consecutive strings : follow one after another without an interruption
["a","b","c","d","e","f","g","h"] ; len = 8
k = 1 ; ["a","b","c","d","e","f","g","h"] ; len = 8
k = 2 ; ["ab","bc","cd","de","ef","fg","gh"] ; len = 7
k = 3 ; ["abc","bcd","cde","def","efg","fgh"] ; len = 6
k = 4 ; ["abcd","bcde","cdef","defg","efgh"] ; len = 5
*/
function longestConsecutive(strArr, k) {
  if (strArr.length === 0 || k > strArr.length || k <= 0)  {
    return ""
  } else {
    let concatArr = Array(strArr.length - k + 1)
    for (let i = 0; i < concatArr.length; i++) {
      concatArr[i] = strArr[i]
      for (let j = 1; j < k; j++) {
        concatArr[i] += strArr[i+j]
      }
    }
    let maxLength = 0
    let longestIndex = concatArr.reduce((acc, elem, index) => {
      if (elem.length > maxLength) {
        maxLength = elem.length
        return index
      } else {
        return acc
      }
    }, 0)
    return concatArr[longestIndex]
  }
}

/* Solution from other people */
function longestConsec1(strArr, k) {
  var longest = "";
  for(var i=0;k>0 && i<=strArr.length-k;i++){
    var tempArray = strArr.slice(i,i+k);
    var tempStr = tempArray.join("");
    if(tempStr.length > longest.length){
      longest = tempStr;
    }
  }
  return longest;
}
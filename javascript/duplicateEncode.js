/*
The goal of this exercise is to convert a string to a new string where each character
in the new string is "(" if that character appears only once in the original string, or ")"
if that character appears more than once in the original string.
Ignore capitalization when determining if a character is a duplicate.

Examples:
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
*/
function duplicateEncode(word){
  word = word.toLowerCase()
  let arr = []
  for(let current = 0; current < word.length; current++) {
    if (arr[current] === undefined) {
      let encodeChar = "("
      for (let iter = current + 1; iter < word.length; iter++) {
        if (word[iter] === word[current]) {
          encodeChar = ")"
          arr[iter] = encodeChar
        }
      }
      arr[current] = encodeChar
    }
  }
  return arr.join("")
}

/* Solutions by others */

// Top solution sorted by Best Practices:
function duplicateEncode1(word){
  return word
    .toLowerCase()
    .split('')
    .map( function (a, i, w) {
      return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
    })
    .join('');
}
// Well voted O(n) solution using objects
const duplicateEncode2 = word => {
  let wordObj = {}, charas = word.toLowerCase().split(""), anws = "";
  charas.forEach(char => char in wordObj ? wordObj[char]++ : wordObj[char] = 1);
  charas.forEach(elem => wordObj[elem] === 1 ? anws += '(' : anws += ')');
  return anws;
}
/*
A pangram is a sentence that contains every single letter of the alphabet at least once.
For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram,
because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram.
Return True if it is, False if not. Ignore numbers and punctuation.
*/
function isPangram(string){
  let stringFlat = string.toLowerCase().split("").sort().filter((elem, index, arr) => {
    return ("a" <= elem && elem <= "z") && ((index === (arr.length-1)) || (elem !== arr[index+1]))
  }).join("")
  return stringFlat === "abcdefghijklmnopqrstuvwxyz"
}

/* Solution from other people */
function isPangram1(string){
  return (string.match(/([a-z])(?!.*\1)/ig) || []).length === 26;
}
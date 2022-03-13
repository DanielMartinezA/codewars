/*
Given a string of words, return the length of the shortest word(s).
The string will never be empty and you do not need to account for different data types.
*/
function findShortestWord(s){
  return s.split(" ").reduce((acc, c) => Math.min(acc, c.length), Number.MAX_SAFE_INTEGER)
}
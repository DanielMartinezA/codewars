/*
You are going to be given a word.
Your job is to return the middle character of the word.
If the word's length is odd, return the middle character.
If the word's length is even, return the middle 2 characters.

#Examples:
getMiddle("test") should return "es"
getMiddle("testing") should return "t"
getMiddle("middle") should return "dd"
getMiddle("A") should return "A"
*/
function getMiddle(s)
{
  if (s.length === 0) {
    return ""
  } else {
    let mid = s.length/2
    return s.length % 2 === 0 ? s.slice(mid-1,mid+1) : s[Math.trunc(mid)]
  }
}

/* Solution from other people */
function getMiddle1(s) {
  // the arguments of substr() represent the starting index and
  // the number of characters to include in the returned string
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}
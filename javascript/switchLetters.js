/*
Given a string made up of letters a, b, and/or c, switch the position of
letters a and b (change a to b and vice versa).
Leave any incidence of c untouched.

Example:
  'acb' --> 'bca'
  'aabacbaa' --> 'bbabcabb'
*/
function switchLetters(s){
  let arr = Array(s.length)
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "a") {
      arr[i] = "b"
    } else if (s[i] === "b") {
      arr[i] = "a"
    } else {
      arr[i] = s[i]
    }
  }
  return arr.join("")
}
function switchLetters1(s){
  s = s.replace(/a/g,"@")
  s = s.replace(/b/g,"a")
  return s.replace(/@/g,"b")
}

// Doing regex in one pass:
function switcheroo(s) {
  return s.replace(/[ab]/g, x => x == "a" ? "b" : "a")
}
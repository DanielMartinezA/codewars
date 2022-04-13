/*
Write Number in Expanded Form

You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'

NOTE: All numbers will be whole numbers greater than 0.
*/
function expandedForm(num) {
  let numStr = String(num)
  ans = numStr[0].padEnd(numStr.length, "0")
  for (let i = 1; i < numStr.length; i++) {
    if (numStr[i] !== "0") {
      ans += " + " + numStr[i].padEnd(numStr.length - i, "0")
    }
  }
  return ans
}

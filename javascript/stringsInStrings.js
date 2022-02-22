/*
Given two arrays of strings a1 and a2 return a sorted array r in lexicographical order
of the strings of a1 which are substrings of strings of a2.

Example 1:
a1 = ["arp", "live", "strong"]
a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
returns ["arp", "live", "strong"]

Example 2:
a1 = ["tarp", "mice", "bull"]
a2 = ["lively", "alive", "harp", "sharp", "armstrong"]
returns []

Beware: r must be without duplicates.
*/
function stringsInStrings(array1, array2){
  let ans = []
  array1.forEach(a1String => {
    if ( array2.some(a2String => a2String.includes(a1String)) ) {
      ans.push(a1String)
    }
  })
  ans.sort()
  return ans
}
// console.log(stringsInStrings(["arp", "live", "strong"],["lively", "alive", "harp", "sharp", "armstrong"]));
// console.log(stringsInStrings(["tarp", "mice", "bull"],["lively", "alive", "harp", "sharp", "armstrong"]));
/*
Write a function dirReduc which will take an array of strings and returns
an array of strings with the needless directions removed (W<->E or S<->N side by side).

Notes:
Not all paths can be made simpler.
The path ["NORTH", "WEST", "SOUTH", "EAST"] is not reducible.
"NORTH" and "WEST", "WEST" and "SOUTH", "SOUTH" and "EAST" are not directly opposite
of each other and can't become such.
Hence the result path is itself : ["NORTH", "WEST", "SOUTH", "EAST"].
*/

function dirReduc(arr){
  let oppositesObj = {N:"S",S:"N",W:"E",E:"W"}
  let aArr = [... arr]
  let bArr = []
  let ready = false

  while (!ready) {
    let i = 0
    ready = true
    while (i < aArr.length) {
      if ((i === aArr.length - 1) || (aArr[i][0] !== oppositesObj[aArr[i+1][0]])) {
        bArr.push(aArr[i])
        i += 1
      } else {
        i += 2
        ready = false
      }
    }
    aArr.splice(0,aArr.length)
    let auxArr = bArr
    bArr = aArr
    aArr = auxArr
  }
  return aArr
}
// console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]));

/* Solution from other people */
function dirReduc(arr) {
  var str = arr.join(''), pattern = /NORTHSOUTH|EASTWEST|SOUTHNORTH|WESTEAST/;
  while (pattern.test(str)) str = str.replace(pattern,'');
  return str.match(/(NORTH|SOUTH|EAST|WEST)/g)||[];
}
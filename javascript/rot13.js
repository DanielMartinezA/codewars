/*
ROT13 is a simple letter substitution cipher that replaces a letter with the
letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13.
If there are numbers or special characters included in the string,
they should be returned as they are.

Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".
*/
function rot13(message){
  return message.split("").map((element) => {
    if ("a" <= element && element <= "z") {
      return String.fromCharCode( (element.charCodeAt() - "a".charCodeAt() + 13) % 26 + "a".charCodeAt() )
    } else if ("A" <= element && element <= "Z") {
      return String.fromCharCode( (element.charCodeAt() - "A".charCodeAt() + 13) % 26 + "A".charCodeAt() )
    } else {
      return element
    }
  }).join("");
}
/*
A  B  C  D  E  F  G  H  I  J  K  L  M  N  O  P  Q  R  S  T  U  V  W  X  Y  Z
65 66 67 68 69 70 71 72 73 74 75 76 77 78 79 80 81 82 83 84 85 86 87 88 89 90
01 02 03 04 05 06 07 08 09 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26
*/

/* Solution from other people - it's clever but hardcoded o(26*n)*/
function rot13_1(message) {
  var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
  var b = "nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM"
  return message.replace(/[a-z]/gi, c => b[a.indexOf(c)])
}
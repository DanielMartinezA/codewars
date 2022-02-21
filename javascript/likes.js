/*
Implement the function which takes an array containing the names of people that like an item.

It must return the display text as shown in the examples:
[]                                -->  "no one likes this"
["Peter"]                         -->  "Peter likes this"
["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

Note: For 4 or more names, the number in "and 2 others" simply increases.
*/
function likes(names) {
  let message = ""
  if (names.length === 0) {
    message = "no one likes this"
  } else if (names.length === 1) {
    message = `${names[0]} likes this`
  } else if (names.length === 2) {
    message = `${names[0]} and ${names[1]} like this`
  } else if (names.length === 3) {
    message = `${names[0]}, ${names[1]} and ${names[2]} like this`
  } else if (names.length >= 4){
    message = `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
  }
  return message
}
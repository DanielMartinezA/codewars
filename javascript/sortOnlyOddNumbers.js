/*
You will be given an array of numbers.
You have to sort the odd numbers in ascending order while leaving
the even numbers at their original positions.

Examples:
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
*/
function sortOnlyOddNumbers(array) {
  newArray = [... array] // creates deep copy of array (it's deep only if it's an array of literal values)
  let oddsArrPos = [] // position of odd numbers on original array
  let oddsArr = [] // array where odd numbers will be sorted
  array.forEach((elem, index) => {
    if (elem % 2 !== 0) {
      oddsArr.push(elem)
      oddsArrPos.push(index)
    }
  });
  oddsArr.sort((a, b) => a - b)
  oddsArrPos.forEach((elem, index) => {
    newArray[elem] = oddsArr[index]
  });
  return newArray
}
// let myArr = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]
// let myNewArr = sortOnlyOddNumbers(myArr)
console.log(sortOnlyOddNumbers([1, 11, 2, 8, 3, 4, 5]));

/* Solution from other people */
function sortArray(array) {
  const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
  return array.map((x) => x % 2 ? odd.shift() : x);
}
// apparently, shift is O(n) whereas pop is O(1), so an improvement would be:
function sortArray1(array) {
  const odd = array.filter((x) => x % 2).sort((a,b) => b - a);
  return array.map((x) => x % 2 ? odd.pop() : x);
}
/*
Given two arrays a and b write a function comp(a, b) that checks whether the two arrays
have the "same" elements, with the same multiplicities (the multiplicity of a member is
the number of times it appears).
"Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

Examples
Valid arrays
  a = [121, 144, 19, 161, 19, 144, 19, 11]  
  b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
  comp(a, b) returns true because in b 121 is the square of 11,
  14641 is the square of 121, 20736 the square of 144, 361 the square of 19,
  25921 the square of 161, and so on.
  It gets obvious if we write b's elements in terms of squares:
  a = [121, 144, 19, 161, 19, 144, 19, 11] 
  b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]

Invalid arrays
  If, for example, we change the first number to something else, comp is not returning true anymore:
  a = [121, 144, 19, 161, 19, 144, 19, 11]  
  b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
  comp(a,b) returns false because in b 132 is not the square of any number of a.

  a = [121, 144, 19, 161, 19, 144, 19, 11]  
  b = [121, 14641, 20736, 36100, 25921, 361, 20736, 361]
  comp(a,b) returns false because in b 36100 is not the square of any number of a.
Remarks
  a or b might be []
  The two arrays have the same size (> 0) given as parameter in function comp.
*/
function comp(array1, array2){
  let ans = false
  if (array1 === [] && array2 === []) {
    ans = true
  } else if (array1 !== null && array2 !== null && array1.length === array2.length) {
    let countObj = {}
    array1.forEach(elem => countObj[elem**2] ? countObj[elem**2]++ : countObj[elem**2] = 1);
    array2.forEach(elem => {
      countObj[elem] = (countObj[elem] || 0) - 1
    })
    ans = Object.values(countObj).every(elem => elem === 0)
  }
  return ans
}

/* Solution from other people */
function comp1(array1, array2) {
  if(array1 == null || array2 == null) return false;
  array1.sort((a, b) => a - b); array2.sort((a, b) => a - b);
  return array1.map(v => v * v).every((v, i) => v == array2[i]);
}
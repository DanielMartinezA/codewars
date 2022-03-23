/*
Given 2 circles c1 and c2, output the number of integer points inside the intersection area between them.

Each circle is represented as an array of three elements.
The first two elements are the coordinates of the center, the third is the radius.

Example
For c1 = [2, 2, 3] and c2 = [0, -1, 3], the output should be 8

There are 8 integer points inside the intersection area between them:
(0,2), (0,1), (1,1), (2,1), (0,0), (1,0), (2,0), (2,-1)

Input/Output
  [input] integer array c1
  The first circle.
  -1000 ≤ c1[0] and c1[1](coordinates) ≤ 1000
  -1600 ≤ c1[2](radius) ≤ 1600

  [input] integer array c2
  The second circle.
  -1000 ≤ c2[0] and c2[1](coordinates) ≤ 1000
  -1600 ≤ c2[2](radius) ≤ 1600
  
  [output] an integer
  The number of integer points inside the intersection area between c1 and c2.
*/
function twoCirclesOverlapIntegerPoints(c1, c2) {
  let points = 0
  let leftLimit = Math.max(c1[0]-c1[2], c2[0]-c2[2])
  let rightLimit = Math.min(c1[0]+c1[2], c2[0]+c2[2])
  let lowerLimit = Math.max(c1[1]-c1[2], c2[1]-c2[2])
  let upperLimit = Math.min(c1[1]+c1[2], c2[1]+c2[2])
  for (let x = leftLimit; x <= rightLimit; x++) {
    for (let y = lowerLimit; y <= upperLimit; y++) {
      if (((x-c1[0])**2 + (y-c1[1])**2 <= c1[2]**2) && 
        ((x-c2[0])**2 + (y-c2[1])**2 <= c2[2]**2)) {
        points++
      }
    }
  }
  return points
}
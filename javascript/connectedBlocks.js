/*
https://www.codewars.com/kata/5a306685e1ce0e3fa500010b/train/javascript

Given a 10x10 grid of 100 cells, with columns indexed 0 to 9 (left to right)
and rows indexed 0 to 9 (bottom to top).
The input of your program will be a comma-separated string of cell identifiers,
identifying the cells that are coloured black. Each cell identifier is a two digit number of
the form <column_index><row_index>.

For example, an input of "18,00,95,40,36,26,57,48,54,65,76,87,97,47" represents the following grid:
   0  1  2  3  4  5  6  7  8  9
9 [ ][ ][ ][ ][ ][ ][ ][ ][ ][ ] 9
8 [ ][X][ ][ ][X][ ][ ][ ][ ][ ] 8
7 [ ][ ][ ][ ][X][X][ ][ ][X][X] 7
6 [ ][ ][X][X][ ][ ][ ][X][ ][ ] 6
5 [ ][ ][ ][ ][ ][ ][X][ ][ ][X] 5
4 [ ][ ][ ][ ][ ][X][ ][ ][ ][ ] 4
3 [ ][ ][ ][ ][ ][ ][ ][ ][ ][ ] 3
2 [ ][ ][ ][ ][ ][ ][ ][ ][ ][ ] 2
1 [ ][ ][ ][ ][ ][ ][ ][ ][ ][ ] 1
0 [X][ ][ ][ ][X][ ][ ][ ][ ][ ] 0
   0  1  2  3  4  5  6  7  8  9
When given this input, your program should output the size of the largest block
of connected black cells, witch is outlined in red in the example above.
So in this case your program would return 3.

Note that two black cells are considered to be connected if they share an edge,
but they are not connected if the share only a corner.

The input could have some cells with invalid format or repeated cells that should not be taken into account.

For example: 00,00,111,1,1a is the same as 00

*/
function solution(blocks) {
  let blocksArr = blocks.split(",").sort()
  let validBlocks = blocksArr.filter((cell, index, array) => {
    return (/^[0-9]{2}$/.test(cell) && cell !== array[index+1])
  })
  let groupMapping = new Array(validBlocks.length)
  let groupsArray = []
  validBlocks.forEach((cell, index) => {
    if (groupMapping[index] === undefined) {
      groupMapping[index] = groupsArray.length
      groupsArray.push([cell])
    }
    adjacentDepthSearch(validBlocks, groupMapping, groupsArray, index)
  })
  
  console.log("groupMapping:");
  console.log(groupMapping);
  console.log("groupsArray:");
  console.log(groupsArray);
  return groupsArray.reduce((acc, c) => Math.max(acc, c.length), 0)
}

function adjacent(c1, c2) {
  //   x
  // x C x
  //   x
  return ((c1[0] === c2[0]) && (Math.abs(c1[1] - c2[1]) === 1))
    || ((c1[1] === c2[1]) && (Math.abs(c1[0] - c2[0]) === 1))
}

function adjacentDepthSearch(validBlocks, groupMapping, groupsArray, index) {
  for (let i = 0; i < validBlocks.length; i++) {
    if (groupMapping[i] === undefined && adjacent(validBlocks[index], validBlocks[i])) {
      groupMapping[i] = groupMapping[index]
      groupsArray[groupMapping[index]].push(validBlocks[i])
      adjacentDepthSearch(validBlocks, groupMapping, groupsArray, i)
    }
  }
}
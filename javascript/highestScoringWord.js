/*
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.

Example:
highestScoringWord('man i need a taxi up to ubud') --> 'taxi';
*/
function highestScoringWord(words){
  const baseCode = "a".charCodeAt() - 1
  let highScore = 0
  return words.split(" ").reduce((highScoreWord, word) => {
    let score = word.split("").reduce((score, letter) => score + letter.charCodeAt() - baseCode, 0)
    if (score > highScore) {
      highScore = score
      return word
    } else {
      return highScoreWord
    }
  }, "")
}
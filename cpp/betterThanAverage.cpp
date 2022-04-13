#include <vector>

/*
There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return True if you're better, else False!

Note:
Your score is not included in the array of your class's score.
For calculating the average score you may add your score to the given array!
*/

bool betterThanAverage(std::vector<int> classScore, int yourScore) {
  float sum = 0;
  std::vector<int>::iterator it;
  for (it = classScore.begin(); it != classScore.end(); it++) {
    sum += *it;
  }
  sum += yourScore;
  return yourScore > (sum / (classScore.size() + 1));
}
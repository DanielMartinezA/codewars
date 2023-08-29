#include<vector>
#include<limits>

/*
Sum all the numbers of a given array ( cq. list ),
except the highest and the lowest element ( by value, not by index! ).

The highest or lowest element respectively is a single element at each edge,
even if there are more than one with the same value.

Mind the input validation.

Example
  { 6, 2, 1, 8, 10 } => 16
  { 1, 1, 11, 2, 3 } => 6

Input validation
If an empty value ( null, None, Nothing etc. ) is given instead of an array,
or the given array is an empty list or a list with only 1 element, return 0.
*/
int sum(std::vector<int> numbers) {
  int sum = 0;
  if (numbers.size() > 1) {
    int max = std::numeric_limits<int>::min();
    int min = std::numeric_limits<int>::max();
    for (int num : numbers) {
      max = num > max ? num : max;
      min = num < min ? num : min;
      sum += num;
    }
    sum = sum - max - min;
  }
  return sum;
}
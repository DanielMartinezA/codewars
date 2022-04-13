#include <vector>
#include <cmath>
std::vector<int> digitize(unsigned long n) {
  int digits;
  if (n != 0) {
    digits = (int) (std::trunc((std::log10(n))) + 1);
  } else {
    digits = 1;
  }

  std::vector<int> ans = std::vector<int>(digits);

  for (auto it = ans.begin(); it != ans.end(); it++) {
    *it = n % 10;
    n = n / 10;
  }
  return ans;
}

/* Pushing into an initially size 0 vector */
std::vector<int> digitize1(unsigned long n) {
  std::vector<int> rev;
  while (n != 0) {
    rev.push_back(n % 10);
    n = n / 10;
  }
}
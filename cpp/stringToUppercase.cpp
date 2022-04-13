#include <string>

/*
  Return input_string in uppercase letters
*/
std::string makeUpperCase (const std::string& input_str) {
  std::string upper (input_str.begin(), input_str.end());
  for (auto it = upper.begin(); it != upper.end(); it++) {
    *it = std::toupper(*it);
  }
  return upper;
}
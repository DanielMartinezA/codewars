#include <algorithm>
#include <string>

std::string no_space(std::string str) {
  std::string ans = str;
  
  ans.erase(std::remove_if(ans.begin(), ans.end(), isspace), ans.end());

  return ans;
}

/* Version iterating over the string */
std::string no_space1(std::string str) {    
  std::string ans = "";
  for (int i = 0; i < str.length(); i++) {
    if (str[i] != ' ') { // maybe use !isspace(str[i])
      ans += str[i];
    }
  }
  return ans;
}
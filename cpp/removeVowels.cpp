# include <string>
# include <algorithm>
# include <regex>

bool isVowel(int ch) {
  return ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o'
  || ch == 'u' || ch == 'A' || ch == 'E' || ch == 'I'
  || ch == 'O' || ch == 'U';
}

std::string removeVowels(const std::string& str) {
  std::string ans = str;
  ans.erase(std::remove_if(ans.begin(), ans.end(), isVowel), ans.end());
  return ans;
}

/* Version using regex. It's much slower though. */
std::string removeVowels1(std::string str) {
  std::regex vowels("[aeiouAEIOU]");
  return std::regex_replace(str, vowels, "");
}
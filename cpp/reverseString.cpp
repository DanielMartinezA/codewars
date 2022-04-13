#include <string>
using namespace std ; 

/*
Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'
*/

string reverseString (string str ) {
  string revStr(str.length(),' ');
  string::reverse_iterator it;
  int i = 0;
  for (it = str.rbegin(); it != str.rend(); it++) {
    revStr[i] = *it;
    i++;
  }
  return revStr;
}

/* Using the string range constructor */
string reverseString1 (string str ) {
  return string(str.rbegin(), str.rend());
}
/*
You need to write regex that will validate a password to make sure it meets the following criteria:

    At least six characters long
    contains a lowercase letter
    contains an uppercase letter
    contains a number

Valid passwords will only be alphanumeric characters.

*/
function validate(password) {
  return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{6,}$/.test(password);
}
// this solution uses positive lookahead, which checks for a match without consuming characters
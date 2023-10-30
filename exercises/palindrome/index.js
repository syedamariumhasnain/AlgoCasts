// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  // // Solution 1:   STRING, ARRAY METHODS OF JAVASCRIPT
  // // -------------------------------------------------
  return str.split("").reverse().join("") === str;

  // // Solution 2:   EVERY (LOOP & RETURN BOOLEAN)
  // // -------------------------------------------
  // return str.split("").every((char, i) => {
  //   return char === str[str.length - i - 1];
  // });

  // // Solution 3:   TRADITIONAL FOR-LOOP (n/2 comparision)
  // // ----------------------------------------------------
  // for(let i=0; i <= (str.length-1)/2; i++) {
  //   if(str[i] !== str[str.length -i -1]) {
  //     return false;
  //   }
  // }
  // return true;
}

module.exports = palindrome;

// Keep in mind:
// ------------
// - Array func. "every" loops to check and return a boolean value 
//   false if any value returns false, ONLY all trues return true
// - Palindrome compares value of one end to the other end

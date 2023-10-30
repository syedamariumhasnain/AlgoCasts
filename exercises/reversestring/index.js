// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  // // Solution 1:   STRING, ARRAY METHODS OF JAVASCRIPT
  // // -------------------------------------------------
  return str.split("").reverse().join("");


  // // Solution 2:   FOR-OF LOOP (ARRAY)
  // // ---------------------------------
  // let reverse = "";
  // for (const char of str) {
  //   reverse = char + reverse;
  // }
  // return reverse;

  
  // // Solution 3:   TRADITIONAL FOR-LOOP
  // // ----------------------------------
  // let reverse = "";
  // for(let i = str.length-1; i >= 0; i--) {
  //   reverse += str[i];
  // }
  // return reverse;

}

module.exports = reverse;

// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  // // Solution 1:   STRING, ARRAY METHODS
  // // -----------------------------------
  return str.split("").reduce((i, s) => {
    return ["a", "e", "i", "o", "u"].includes(s.toLowerCase()) ? ++i : i;
  }, 0);

  // // Solution 2:   FOR-LOOP; Iterate each Character
  // // ----------------------------------------------
  // let count = 0;
  // for (let char of str) {
  //   ["a", "e", "i", "o", "u"].includes(char.toLowerCase()) && ++count;
  // }
  // return count;

  // // Solution 3:   REGEX + match()
  // // -----------------------------
  // const matches = str.match(/[aeiou]/gi);
  // return matches ? matches.length : 0;
}

module.exports = vowels;

// Keep in mind:
// ------------
// - Do ++i, NOT i++ just before returning i.e.  return ++i
// - JS match() function returns items matched or null

// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  // // Solution 1:   STRING, ARRAY METHODS + Regex
  // // -------------------------------------------
  const cleanSortedString = (str) => {
    return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
  };
  return cleanSortedString(stringA) === cleanSortedString(stringB);

  // // Solution 2:   Character Map Technique
  // // -------------------------------------
  // const buildCharMap = (str) => {
  //   const charMap = {};
  //   for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
  //     charMap[char] = charMap[char] + 1 || 1;
  //   }
  //   return charMap;
  // };

  // const charMapA = buildCharMap(stringA);
  // const charMapB = buildCharMap(stringB);

  // if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
  //   return false;
  // }

  // for (let char in charMapA) {
  //   if (charMapA[char] !== charMapB[char]) {
  //     return false;
  //   }
  // }
  // return true;
}

module.exports = anagrams;

// Keep in mind:
// ------------
// - Instead of - if (charMap[char]) is true "charMap[char] + 1" else "1"
//   we can use OR operator || like;  charMap[char] + 1 || 1

// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  // // Solution 1:   STRING, ARRAY METHODS + Math.sign(n)
  // // -------------------------------------------------
  const reverse = n.toString().split("").reverse().join("");
  return parseInt(reverse) * Math.sign(n);

  // // Solution 2:   STRING, ARRAY METHODS + rev *(-1)
  // // -----------------------------------------------
  // const reverse = n.toString().split("").reverse().join("");
  // return parseInt(reverse) * (n >= 0 ? 1 : -1);
}

module.exports = reverseInt;

// Keep in mind:
// ------------
// - (n > 0) also excludes 0 and -0 shouldn,t be the result of 0
//   (n >= 0) OR (n < 0) is correct, to avoid -ve sign on 0

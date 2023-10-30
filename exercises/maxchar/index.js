// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charMap = {};

  let maxChar = "";
  let maxCount = 0;

  for (const char of str) {
    if(charMap[char]) {
      charMap[char]++;
    }
    else {
      charMap[char] = 1;
    }

    if(charMap[char] > maxCount) {
      maxChar = char;
      maxCount = charMap[char];
    }
  }

  return maxChar;
}

module.exports = maxChar;

// Keep in mind:
// ------------
// - line 22:   if (charMap[char] > maxCount)
//   we compare "charMap[char]" (count) to "maxCount" (count)
//   NOT "charMap[char]" to "maxChar" (a string)

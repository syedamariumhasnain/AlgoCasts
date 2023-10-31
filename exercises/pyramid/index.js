// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  // // Solution 1:   STRING, ARRAY METHODS
  // // -----------------------------------
  const columnSize = n * 2 - 1;
  for (let row = 1; row <= n; row++) {
    const hashes = row * 2 - 1;
    console.log(
      " ".repeat((columnSize - hashes) / 2) +
        "#".repeat(hashes) +
        " ".repeat((columnSize - hashes) / 2)
    );
  }

  // // Solution 2:   FOR-LOOP; Iterate each Character
  // // ----------------------------------------------
  // const columnSize = n * 2 - 1;
  // for (let row = 0; row < n; row++) {
  //   const midPoint = Math.floor(columnSize / 2);
  //   let stair = "";
  //   for (let col = 0; col < columnSize; col++) {
  //     if (col >= midPoint - row && col <= midPoint + row) {
  //       stair += "#";
  //     } else {
  //       stair += " ";
  //     }
  //   }
  //   console.log(stair);
  // }
}

// // Solution 3:   RECURSIVE FUNCTION
// // --------------------------------
// function pyramid(n, rows = 0, stair = "") {
//   if (rows === n) {
//     return;
//   }
//   if (stair.length === n * 2 - 1) {
//     console.log(stair);
//     return pyramid(n, rows + 1);
//   }

//   const midPoint = Math.floor((n * 2 - 1) / 2);
//   const newStair =
//     stair +
//     (stair.length >= midPoint - rows && stair.length <= midPoint + rows
//       ? "#"
//       : " ");
//   pyramid(n, rows, newStair);
// }

module.exports = pyramid;

// Keep in mind:
// ------------
// - For Difficult Patterns like Pyramid, first break its formulas in variables
//   i.e. columnSize  n*2 -1,  hashes  row*2 -1
// - Iterate each Character;
//   columnSize  n*2 -1,  midPoint  Math.floor(columnSize / 2)
// - Don't forget to add previous stair value in new stair value

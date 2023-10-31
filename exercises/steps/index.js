// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  // // Solution 1:   STRING, ARRAY METHODS
  // // -----------------------------------
  for (let i = 1; i <= n; i++) {
    console.log("#".repeat(i).concat(" ".repeat(n - i)));
  }

  // // Solution 2:   FOR-LOOP; Iterate each Character
  // // ----------------------------------------------
  // for (let row = 1; row <= n; row++) {
  //   let stair = "";
  //   for (let col = 1; col <= n; col++) {
  //     if (col <= row) {
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
// function steps(n, rows = 0, stair = "") {
//   if (rows === n) {
//     return;
//   }
//   if (stair.length === n) {
//     console.log(stair);
//     return steps(n, rows + 1);
//   }

//   const newStair = stair + (stair.length <= rows ? "#" : " ");
//   steps(n, rows, newStair);
// }

module.exports = steps;

// Keep in mind:
// ------------
// - RECURSIVE FUNCTION --- On Completing one stair:
//   1- Show the Result it in Console...
//   2- Return the new function to end the previous stair...

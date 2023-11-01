// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    let count = 1;
    let startRow = 0;
    let endRow = n-1;
    let startColumn = 0;
    let endColumn = n-1;
  
    const matrix = [];
    for(let i=0; i<n; i++) {
      matrix.push([]);
    }
  
    while(startRow <= endRow && startColumn <= endColumn) {
      // Write Start Row
      for(let col=startColumn; col <=endColumn; col++) {
        matrix[startRow][col] = count;
        ++count;
      }
      ++startRow;
  
      // Write End Column
      for(let row=startRow; row <=endRow; row++) {
        matrix[row][endColumn] = count;
        ++count;
      }
      --endColumn
  
      // Write End Row
      for(let col=endColumn; col >= startColumn; col--) {
        matrix[endRow][col] = count;
        ++count;
      }
      --endRow;
  
      // Write Start Column
      for(let row=endRow; row >=startRow; row--){
        matrix[row][startColumn] = count;
        ++count
      }
      ++startColumn
    }
    console.log(matrix);
    return matrix;
  }

module.exports = matrix;

// Keep in mind:
// ------------
// - Iterate startColumn to endColumn to fill Start Row
//   Iterate startRow to endRow to fill End Column
//   Iterate endColumn to startColumn to fill End Row
//   Iterate endRow to startRow to fill Start Column

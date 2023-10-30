// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  // // Solution 1:   Slice Old Array & Push in New Array
  // // -------------------------------------------------
  let chunked = [];
  let index = 0;

  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }
  return chunked;

  // // Solution 2:   Iterating each item & Push in Array
  // // -------------------------------------------------
  // let chunked = [];
  // for (let i = 0; i <= array.length - 1; i++) {
  //   let last = chunked[chunked.length - 1];
  //   if (!last || last.length === size) {
  //     chunked.push([array[i]]);
  //   } else {
  //     chunked[chunked.length - 1].push(array[i]);
  //   }
  // }
  // return chunked;
}

module.exports = chunk;

// Keep in mind:
// ------------
// - "size" is a size of chunk, NOT size of Array
// - (index < array.length) OR (index <= array.length-1) is Correct
//   (index < array.length-1) is NOT Correct

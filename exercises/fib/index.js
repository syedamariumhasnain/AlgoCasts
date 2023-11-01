// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
  // // Solution 1:   FOR-LOOP; Iterate to nth element
  // // ----------------------------------------------
  // const series = [0, 1];
  // for (let i = 2; i <= n; i++) {
  //   series[i] = series[i - 2] + series[i - 1];
  // }
  // return series[series.length - 1];

  // // Solution 1:   RECURSIVE SOLUTION
  // // --------------------------------
  if (n < 2) {
    return n;
  }
  return fib(n-2) + fib(n-1);
}

// function memoize(fn) {
//   const cache = {};

//   return function(...args) {
//     if(cache[args]) {
//       return cache[args];
//     }

//     const res = fn.apply(this, args);
//     cache[args] = res;
//     return res;
//   }
// }

// function slowFib(n) {
//   if (n < 2) {
//     return n;
//   }

//   return fib(n-2) + fib(n-1);
// }

// const fib = memoize(slowFib);



module.exports = fib;

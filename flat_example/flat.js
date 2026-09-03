let arr = [
  1,
  [2, [3, 4]],
  [
    [5, 6],
    [7, [8, 9]],
  ],
];

// Expected:
// [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(arr.flat(5));

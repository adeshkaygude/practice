let arr = [45, 12, 89, 34, 67, 23, 90];

arr.sort(function (a, b) {
  return a - b;
});

console.log(arr[arr.length - 2]);

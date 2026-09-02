let arr = [56, 23, 78, 12, 90, 34];
arr.sort((a, b) => {
  return a - b;
});

console.log(arr[arr.length - 1]);
console.log(arr[0]);

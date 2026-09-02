let arr = [12, 45, 7, 89, 34, 67];
arr.sort((a, b) => {
  return a - b;
});

console.log(arr[arr.length-1]);

let arr = [10, 20, 10, 30, 20, 40, 30, 50];

arr.sort((a, b) => {
  return a - b;
});

let unique = [];
for (let i = 0; i < arr.length; i++) {
  if (arr[i] != arr[-i]) {
    unique.push(arr[i]);
  }
}
console.log(unique);

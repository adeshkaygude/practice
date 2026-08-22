let arr = [10, 25, 10, 30, 45, 25, 50, 10];
let count = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] == 10) {
    count++;
  }
}
console.log(count);

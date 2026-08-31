let arr = [10, 15, 20, 7, 8, 13, 30];
let sum = 0;
let count = 0;
for (let value of arr) {
  if (value % 2 == 0) {
    count++;
    if (count <= 3) {
      sum += value;
    }
  }
}
console.log(sum);

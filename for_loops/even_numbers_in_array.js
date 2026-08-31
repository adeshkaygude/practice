let arr = [12, 7, 8, 15, 20, 33, 42, 51];

let count = 0;

for (let value of arr) {
  if (value % 2 == 0) {
    count++;
  }
}
console.log(count);

let arr = [10, 25, 30, 45, 50, 65, 70];

let count = 0;
arr.forEach((el) => {
  if (el > 40) {
    count++;
  }
});
console.log(count);

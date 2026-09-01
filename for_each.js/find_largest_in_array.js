let arr = [12, 5, 18, 7, 25, 30, 9, 40];
let large = 0;
arr.forEach((el) => {
  if (large < el) {
    large = el;
  }
});

console.log(large);

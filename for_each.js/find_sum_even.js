let arr = [12, 7, 8, 15, 20, 9, 30];
let sum=0;
arr.forEach((el) => {
  if (el % 2 == 0) {
     sum+= el;
  }
});

console.log(sum);


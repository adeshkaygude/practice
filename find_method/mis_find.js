let arr = [15, 42, 18, 75, 24, 91, 36, 60];
let ans = arr.findLast((el) => {
  return el % 3 == 0 && el > 50;
});

console.log(ans);

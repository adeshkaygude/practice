let nums = [1, 2, 3, 4, 5, 6];
let ans = nums.flatMap((el) => {
  return el % 2 == 0?[el,"even"]:[el,"odd"];
});

console.log(ans);

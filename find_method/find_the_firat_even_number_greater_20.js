let arr = [15, 21, 17, 25, 28, 31, 40];

let result = arr.find((el) => {
  return el % 2 == 0 && el > 20;
});

console.log(result);

let arr = [15, 22, 35, 48, 60, 75];

let result = arr.includes(35);

let result2 = arr.some((el) => {
  return el % 5 == 0 && el > 50;
});

console.log(result2);
console.log(result);

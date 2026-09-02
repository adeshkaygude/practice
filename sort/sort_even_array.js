let arr = [15, 8, 23, 42, 10, 7, 36, 19];

let newarr = arr.filter((el) => {
  if (el % 2 == 0) {
    return el;
  }
});

newarr.sort((a, b) => {
  return b - a;
});

console.log(newarr);

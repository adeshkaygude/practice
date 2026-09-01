let arr = [10, 20, 15, 30, 25, 40, 35];

let less = arr[0];

arr.forEach((el) => {
  if (el < less) {
    less = el;
  }
});

console.log(less);

let nums = [10, 15, 20, 25, 30, 35, 40];

function even(arr) {
  return arr
    .filter(function (el) {
      return el % 2 === 0;
    })

    .map(function (el) {
      return el * 2;
    })
    .filter(function (el) {
      return el > 30;
    })
    .reduce(function (pre, curent) {
      return pre + curent;
    }, 0);
}

let sum = even(nums);
// console.log(even(nums));
console.log(sum);

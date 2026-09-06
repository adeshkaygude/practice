let nums = [12, 5, 18, 7, 20, 3, 25, 10];

function number(arr) {
  return arr
    .filter(function (el) {
      return el > 10;
    })
    .map(function (el) {
      return el * 2;
    })
    .filter(function (el) {
      return el % 2 === 0;
    })
    .sort(function (a, b) {
      return b - a;
    })
    .slice(0, 3)
    .reduce(function (prev, current) {
      return prev + current;
    }, 0);
}
console.log(number(nums));

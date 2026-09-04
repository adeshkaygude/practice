let nums = [10, 20, 30, 40, 50];

function checkDivisible(arr) {
  return arr.every(function (el) {
    return el % 5 == 0;
  });
}

console.log("result : ", checkDivisible(nums));

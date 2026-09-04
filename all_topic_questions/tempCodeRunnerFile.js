let nums = [10, 20, 30, 40, 50];

function checkDivisible(arr) {
  return arr.ever(function (el) {
    return el > 5;
  });
}

console.log("result : ", checkDivisible(nums));

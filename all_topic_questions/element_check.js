let nums = [10, 15, 20, 25, 30, 35];

function checkNumber(arr) {
  return arr.some(function (el) {
    return el > 30;
  });
}

console.log("result : ", checkNumber(nums));

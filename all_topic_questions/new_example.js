let nums = [10, 20, 30, 40, 50, 60];

function multiply(arr) {
  return arr.map(function (el) {
    return el * 2;
  });
}

console.log("result : ", multiply(nums));

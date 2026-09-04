let nums = [10, 15, 20, 25, 30, 35, 40];

function evenSum(arr) {
  let even = arr.filter(function (el) {
    return el % 2 === 0;
  });

  return even.reduce(function (prev, current) {
    return prev + current;
  });
}

console.log("even sum : ", evenSum(nums));

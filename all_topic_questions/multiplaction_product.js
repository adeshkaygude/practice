let nums = [5, 10, 15, 20, 25];

function product(arr) {
  return nums.reduce(function (prev, current) {
    return prev * current;
  });
}

console.log("Product : ", product(nums));

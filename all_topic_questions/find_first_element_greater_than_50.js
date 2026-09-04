let nums = [10, 25, 35, 45, 55, 65, 75];

function greater(arr) {
  return arr.find(function (el) {
    return el > 50;
  });
}

console.log("greater number : ", greater(nums));

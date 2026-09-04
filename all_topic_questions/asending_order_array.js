let nums = [50, 10, 40, 20, 30];
function ascending(arr) {
  return arr.sort(function (a, b) {
    return a - b;
  });
}

console.log("ascending : ", ascending(nums));

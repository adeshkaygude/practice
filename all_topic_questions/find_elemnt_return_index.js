let nums = [10, 20, 30, 40, 50];

function findElement(arr) {
  return arr.findIndex(function (el) {
    return el === 30;
  });
}

console.log("index : ", findElement(nums));

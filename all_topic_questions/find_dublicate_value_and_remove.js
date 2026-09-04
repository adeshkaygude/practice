let nums = [10, 20, 10, 30, 20, 40, 10, 50];
function removeDuplicate(arr) {
  return arr.filter(function (el, index) {
    return arr.indexOf(el) === index;
  });
}

console.log("unique : ", removeDuplicate(nums));
 
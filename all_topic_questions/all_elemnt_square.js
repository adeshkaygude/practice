let arr = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100];

function square(squ) {
  return squ.map(function (el) {
    return el * el;
  });
}

console.log("square of array : ", square(arr));

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function square(arr) {
  return arr.map(function (el) {
    return el * el;
  });
}

console.log("square of array : ", square(nums));
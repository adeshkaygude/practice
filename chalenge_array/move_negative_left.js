const numbers = [4, -2, 7, -5, 1, -8, 3];

function movenegative(numbers) {
  let arr = [];
  let arr2 = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] >= 0) {
      arr.push(numbers[i]);
    } else {
      arr2.push(numbers[i]);
    }
  }
  return arr2.concat(arr);
}

console.log(movenegative(numbers));

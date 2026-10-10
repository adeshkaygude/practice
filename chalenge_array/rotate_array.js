const numbers = [1, 2, 3, 4, 5, 6, 7];
function rotate(numbers) {
  let k = 2;
  let arr1 = [];
  let arr2 = [];

  for (let i = 0; i < numbers.length; i++) {
    if (i > numbers.length - (k + 1)) {
      arr1.push(numbers[i]);
    } else {
      arr2.push(numbers[i]);
    }
  }

  return arr1.concat(arr2);
  //   for (let i = numbers.length - (k + 1); i < numbers.length; i++) {
  //     arr1.push(numbers[i]);
  //   }
}

console.log(rotate(numbers));

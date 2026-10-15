const numbers = [1, 2, 3, 2, 4, 1, 5];

function remove(numbers) {
  let arr = [];

  for (let i = 0; i < numbers.length; i++) {
    let found = false;

    for (let j = 0; j < arr.length; j++) {
      if (numbers[i] === arr[j]) {
        found = true;
        break;
      }
    }

    if (!found) {
      arr.push(numbers[i]);
    }
  }

  return arr;
}

console.log(remove(numbers));

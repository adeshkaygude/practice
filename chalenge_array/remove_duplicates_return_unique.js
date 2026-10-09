const numbers = [1, 2, 2, 3, 4, 4, 5, 5, 6];

function remove_duplicate(numbers) {
  let unique = [];

  for (let i = 0; i < numbers.length; i++) {
    if (!unique.includes(numbers[i])) {
      unique.push(numbers[i]);
    }
  }

  return unique;
}

console.log(remove_duplicate(numbers));

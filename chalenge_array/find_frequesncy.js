const numbers = [1, 2, 2, 3, 3, 3, 4, 4, 5];

function find_frequency(numbers) {
  let count = {};

  for (let i = 0; i < numbers.length; i++) {
    if (count[numbers[i]]) {
      count[numbers[i]]++;
    } else {
      count[numbers[i]] = 1;
    }
  }
  return count;
}

console.log(find_frequency(numbers));

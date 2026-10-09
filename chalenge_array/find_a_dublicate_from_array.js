const numbers = [10, 20, 30, 20, 40, 10, 50, 30];
function find_dublicates(numbers) {
  let dublicate = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] === numbers[j]) {
        dublicate.push(numbers[j]);
      }
    }
  }
  return dublicate;
}

console.log(find_dublicates(numbers));


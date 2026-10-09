const numbers = [1, 2, 4, 5, 6, 7];

function find_missing(numbers) {
  const n = numbers.length + 1;
  const total = (n * (n + 1)) / 2;

  let sum = 0;

  for (let i of numbers) {
    sum += i;
  }
  return total - sum;
}

console.log(find_missing(numbers));

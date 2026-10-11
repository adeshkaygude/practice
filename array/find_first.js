const numbers = [5, 10, 15, 20, 25, 30];

function find_first(numbers) {
  return numbers.find((el) => {
    return el > 15;
  });
}

console.log(find_first(numbers));

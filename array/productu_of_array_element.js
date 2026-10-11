const numbers = [10, 20, 30, 40, 50];
function product(numbers) {
  return numbers.reduce((prev, current) => {
    return prev * current;
  });
}

console.log(product(numbers));

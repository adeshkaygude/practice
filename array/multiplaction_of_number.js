const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
function multiplaction(numbers) {
  return numbers.map((el) => {
    return el * el;
  });
}

console.log(multiplaction(numbers));

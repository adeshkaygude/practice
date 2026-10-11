const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function even_add(numbers) {
  let even = numbers.filter((el) => {
    return el % 2 === 0;
  });
  let add = even.reduce((prev, current) => {
    return prev + current;
  }, 0);
  return add;
}

console.log(even_add(numbers));

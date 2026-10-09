const numbers = [10, 15, 20, 25, 30, 35, 40];
function sum_even(numbers) {
  let even_sum = 0;

  for (let i of numbers) {
    if (i % 2 === 0) {
      even_sum += i;
    }
  }
  return even_sum;
}

console.log(sum_even(numbers));

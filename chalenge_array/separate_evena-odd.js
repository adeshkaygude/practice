const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function even_odd(numbers) {
  let even = [];
  let odd = [];

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      even.push(numbers[i]);
    } else {
      odd.push(numbers[i]);
    }
  }
  return { even, odd };
}
console.log(even_odd(numbers));

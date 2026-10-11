const numbers = [10, 15, 20, 25, 30, 35, 40];

function greater(numbers) {
  let greater = numbers.filter((el) => {
    return el > 25;
  });

  return greater;
}

console.log(greater(numbers));

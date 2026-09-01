let numbers = [5, 10, 15, 20, 25];

let num = numbers.map((num) => {
  if (num % 2 == 0) {
    return (num = num * 2);
  } else {
    return (num = num * 3);
  }
});
console.log(num);

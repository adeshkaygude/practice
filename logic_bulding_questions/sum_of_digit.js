function sum(num) {
  let sum = 0;

  while (num > 0) {
    let temp = num % 10;
    num = Math.floor(num / 10);
    sum += temp;
  }

  console.log(sum);
}

sum(12345);

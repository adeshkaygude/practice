const numbers = [12, 35, 1, 10, 34, 35];

function secondLargest(numbers) {
  let largest = 0;
  let secondlargest = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > largest) {
      secondlargest = largest;
      largest = numbers[i];
    } else if (numbers[i] > secondlargest && numbers[i] < largest) {
      secondlargest = numbers[i];
    }
  }

  return secondlargest;
}

console.log(secondLargest(numbers));

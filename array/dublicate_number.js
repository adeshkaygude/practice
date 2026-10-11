const numbers = [1, 2, 3, 2, 4, 5, 3, 6, 4, 7];

function duplicate(numbers) {
  return numbers.filter((el, index) => {
    return (
      numbers.indexOf(el) !== index &&
      numbers.indexOf(el) === numbers.lastIndexOf(el)
    );
  });
}

console.log(duplicate(numbers));
 
const numbers = [0, 5, 0, 3, 8, 0, 2, 9];

function move_zero(numbers) {
  let num = [];
  let moved = [];

  for (let i of numbers) {
    if (i === 0) {
      moved.push(i);
    } else {
      num.push(i);
    }
  }
  return num.concat(moved);
}

console.log(move_zero(numbers));

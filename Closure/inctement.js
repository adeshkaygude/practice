function outer(num) {
  function inner() {
    // Return the current value, then increment num
    return num++;
  }

  // Return the function itself
  return inner;
}

const count = outer(1);

console.log(count());
console.log(count());
console.log(count());
console.log(count());
console.log(count());

function createCounter() {
  const count = 0;
  function increament() {
    count++;

    function decrement() {
      count--;
      return count;
    }
    return decrement;
  }

  return increament;
}
let counter = createCounter();
console.log(counter.increament());
console.log(counter.increament());
console.log(counter.increament());
console.log(counter.decrement());
console.log(counter.decrement());

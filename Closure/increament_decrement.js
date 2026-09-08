function createCounter() {
  let count = 0;
  function increment() {
    count++;
    return count;
  }

  function decrement() {
    count--;
    return count;
  }
  return {
    increment,
    decrement,
  };
}

let counter = createCounter();

console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1

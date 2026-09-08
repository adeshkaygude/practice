function createcounter() {
  let count = 0;
  function increament() {
    count++;
    return count;
  }
  function decreament() {
    count--;
    return count;
  }

  return {
    increament,
    decreament,
  };
}
let counter = createcounter();

console.log(counter.increament());
console.log(counter.increament());
console.log(counter.increament());
console.log(counter.decreament());
console.log(counter.decreament());

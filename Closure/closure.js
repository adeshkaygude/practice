function outer() {
  let count = 0;
  function inner() {
    count++;
    return count;
  }
  return inner;
}

let c = outer();

console.log(c());
console.log(c());
console.log(c());
console.log(c());
console.log(c());

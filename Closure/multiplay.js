function multiplyBy(num) {
  function inner(value) {
    return value * num;
  }
  return inner;
}

let double = multiplyBy(2);
let triple = multiplyBy(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15

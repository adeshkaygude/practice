function createMultiplier(nums) {
  function inner(value) {
    return (value = value * nums);
  }
  return inner;
}

let multiplyBy2 = createMultiplier(2);
let multiplyBy5 = createMultiplier(5);

console.log(multiplyBy2(10)); // 20
console.log(multiplyBy2(7)); // 14
console.log(multiplyBy5(10)); // 50
console.log(multiplyBy5(3)); // 15

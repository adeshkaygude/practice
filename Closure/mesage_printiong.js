function createGreeting(ms) {
  function inner(ms2) {
    return ms + ms2;
  }
  return inner;
}

let sayHello = createGreeting("Hello");
let sayGoodMorning = createGreeting("Good Morning");

console.log(sayHello("Adesh")); // Hello Adesh
console.log(sayHello("Rahul")); // Hello Rahul
console.log(sayGoodMorning("Adesh")); // Good Morning Adesh

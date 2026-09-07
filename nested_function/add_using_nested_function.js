function outer(a) {
  return function inner(b) {
    return a + b;
  };
}

console.log(outer(10)(20));

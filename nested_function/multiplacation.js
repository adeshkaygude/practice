function outer(a) {
  function inner(b) {
    return a * b;
  }

  return inner;
}

console.log(outer(5)(4));

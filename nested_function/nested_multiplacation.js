function outer(a) {
  function first(b) {
    function inner(c) {
      return a * b * c;
    }
    return inner;
  }
  return first;
}

console.log(outer(10)(20)(30));

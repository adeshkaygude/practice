function outer(a) {
  function inner(b) {
    function last(c) {
      return a + b + c;
    }
    last();
  }
  inner();
}

console.log(outer(10)(20)(30));

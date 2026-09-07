function outer(a) {
  return function inner(b) {
    return function inner3(c) {
      return function inner4(d) {
        return a + b + c + d;
      };
    };
  };
}

console.log(outer(10)(20)(30)(40));

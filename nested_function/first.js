function outer() {
  function inner() {
    console.log("Hello adesh");
  }
  return inner();
}
outer();

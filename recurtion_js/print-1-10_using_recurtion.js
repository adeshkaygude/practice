function number(n) {
  if (n > 5) {
    return;
  }
  console.log(n);
  number(n + 1);
}
number(1);

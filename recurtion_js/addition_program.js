function addition(n) {
  if (n === 0) {
    return 0;
  }

  return (n += addition(n - 1));
}

console.log(addition(15));

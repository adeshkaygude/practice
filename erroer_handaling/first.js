function divide(a, b) {
  if (b === 0) {
    throw new Error(" can not divided by zero");
  }
  return a / b;
}

try {
  let result = divide(10, 0);
  console.log(result);
} catch (error) {
  console.log(error.message);
} finally {
  console.log("operation completed");
}

try {
  let result = 10 / 0;
  console.log(result);
} catch (error) {
  console.log(error.name);
  console.log(error.message);
} finally {
  console.log("finaly");
}

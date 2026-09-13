function revers(str) {
  if (str === "") {
    return "";
  }

  return revers(str.slice(1)) + str;
}

console.log(revers("hello"));

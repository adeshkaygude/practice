function voting(age) {
  if (age >= 18) {
    return " you can voting";
  } else {
    return "you can not voting ";
  }
}

console.log(voting(13));

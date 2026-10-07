function voting(age) {
  return new Promise((resolve, reject) => {
    if (age > 18) {
      resolve("your are eligible");
    } else {
      reject("you are not eligible ");
    }
  });
}

voting(20)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

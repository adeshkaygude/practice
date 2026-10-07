function getdata() {
  return (p = new Promise((resolve, reject) => {
    if (true) {
      resolve("get data");
    } else {
      reject("data not resived");
    }
  }));
}

getdata()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

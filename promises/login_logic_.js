function login(user, pass) {
  return new Promise((resolve, reject) => {
    if (user === "admin" && pass === 1234) {
      resolve("Login successful");
    } else {
      reject("Invalid username or password");
    }
  });
}

login("admin", 1234)
  .then((success) => {
    console.log(success);
  })
  .catch((err) => {
    console.log(err);
  });

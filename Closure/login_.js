function createUser(name, pass) {
  function login(l_name, l_pass) {
    if (name == l_name && pass == l_pass) {
      return "login succesfuly";
    } else {
      return "invalid password";
    }
  }

  function getusername() {
    return name;
  }
  return {
    login,
    getusername,
  };
}
let use = createUser("adesh", "12345");

console.log(use.login("adesh", "12345"));
console.log(use.login("adesh", "13345"));
console.log(use.getusername());

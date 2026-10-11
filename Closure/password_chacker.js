function createPassword(password) {
  function checkPassword(pass) {
    return password === pass;
  }
  function changePassword(old_pass, new_pass) {
    if (password === old_pass) {
      password = new_pass;
    }
  }
  return {
    checkPassword,
    changePassword,
  };
}
const user = createPassword("abc123");
console.log(user.checkPassword("abc123"));
console.log(user.checkPassword("wrong"));
user.changePassword("abc123", "xyz789");
console.log(user.checkPassword("xyz789"));

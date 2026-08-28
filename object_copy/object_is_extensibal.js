let user = {
  name: "adesh",
  age: 21,
  address: {
    citye: "pune",
  },
};

Object.preventExtensions(user);
user.name = "new name";
user.rollno = 1;
delete user.age;

console.log(user);

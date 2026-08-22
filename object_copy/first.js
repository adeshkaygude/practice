let user = {
  name: "adesh",
  age: 21,
  address: {
    dity: "pune",
  },
};

// shallow copy

let user2 = Object.assign({}, user);

user.name="new name ";
user.address="Mumbai";
console.log(user)
console.log(user2);

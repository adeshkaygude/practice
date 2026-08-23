let user = {
  name: "adesh",
  age: 21,
  address: {
    city: "pune",
  },
};

let user2 = Object.assign({}, user);

user.name = "new_name";
user.address.city = "ganeshwadi";

console.log(user);
console.log(user2);

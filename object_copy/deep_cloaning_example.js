let user = {
  name: "adesh",
  age: 10,
  address: {
    city: "pune",
  },
};

// Deep cloning
let str = JSON.stringify(user);
let user2 = JSON.parse(str);

user.name = "new name";
user.address.city = "mumbai";

console.log(user);
console.log(user2);

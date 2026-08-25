let user = {
  name: "adesh ",
  age: 21,
  address: {
    city: "pune",
  },
};

let user2 = structuredClone(user);

user.name = "omakar";
user.address.city = "mumbai";

console.log(user);
console.log(user2);

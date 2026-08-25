let user = {
  name: "adesh",
  age: 21,

  adress: {
    city: "pune",
  },
};

let user2 = Object.assign({}, user);
user.name = "omkar";
user.adress.city = "mumbai";

console.log(user);
console.log(user2);

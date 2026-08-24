let user = {
  name: "adesh ",
  age: 21,
  address: {
    city: "pune",
  },
};

let str = JSON.stringify(user);
let user2 = JSON.parse(str);

user.name = "omkar";
user.address.city = "mumbai";

console.log(user);
console.log(user2);

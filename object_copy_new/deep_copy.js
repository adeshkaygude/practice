let user = {
  name: "Adesh",
  address: {
    city: "Pune",
    area: "Hadapsar",
  },
};

let userCopy = { ...user };

userCopy.address.city = "Mumbai";

console.log(user);
console.log(userCopy);

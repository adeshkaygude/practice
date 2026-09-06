let student = {
  name: "Adesh",
  age: 22,
};

let details = {
  city: "Pune",
  course: "MERN",
};

let merg = {... details, student };

console.log(merg);

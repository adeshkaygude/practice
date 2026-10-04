// const student = new Map();

// student.set("name", "Adesh");
// student.set("age", 22);
// student.set("course", "MERN");

// console.log(student);

// const user = new Map();

// user.set("name", "Adesh");
// user.set("age", 22);
// user.set("city", "Pune");
// console.log(user.keys());

const user = new Map();

user.set("name", "Adesh");
user.set("age", 22);
user.set("city", "Pune");

console.log(user.values());

for (let value of user.values()) {
  console.log(value);
}

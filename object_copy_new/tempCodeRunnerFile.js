let student = {
  name: "Adesh",
  age: 22,
  course: "BCA",
};

let studentCopy = Object.assign({}, student);
studentCopy.name = "rahul";
console.log(student);
console.log(studentCopy);

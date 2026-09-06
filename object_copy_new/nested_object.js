let student = {
  name: "Adesh",
  age: 22,
  address: {
    city: "Pune",
    pincode: 411001,
  },
};


let studentCopy=Object.assign({},student)
studentCopy.address.city="Mumbai";
console.log(student);
console.log(studentCopy);


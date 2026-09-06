let employee = {
  name: "Adesh",
  skills: ["HTML", "CSS", "JavaScript"],
  experience: 1,
};

let employeeCopy = Object.assign({}, employee);

employeeCopy.name = "Rahul";

employeeCopy.skills.push("React");

console.log(employee);
console.log(employeeCopy);

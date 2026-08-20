let employee = {
  name: "Adesh",
  age: 22,
  salary: 30000,
  city: "Pune",
};

employee.salary = 4000;
employee.company = "tcs";
delete employee.city;
console.log(Object.entries(employee));
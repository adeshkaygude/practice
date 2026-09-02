let employees = [
  { name: "Adesh", salary: 35000 },
  { name: "Rahul", salary: 50000 },
  { name: "Amit", salary: 42000 },
  { name: "Priya", salary: 60000 },
];

employees.sort((a, b) => {
  return b.salary - a.salary;
});

console.log(employees[0]);

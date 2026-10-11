function createEmployee(name, salary) {
  function getName() {
    return name;
  }
  function getSalary() {
    return salary;
  }
  function increaseSalary(increase) {
    salary += increase;
  }
  function decreaseSalary(decrease) {
    salary -= decrease;
  }
  return { getName, getSalary, increaseSalary, decreaseSalary };
}

const employee = createEmployee("Adesh", 30000);
console.log(employee.getName()); // Adesh
console.log(employee.getSalary()); // 30000

employee.increaseSalary(5000);
console.log(employee.getSalary()); // 35000

employee.decreaseSalary(2000);
console.log(employee.getSalary()); // 33000

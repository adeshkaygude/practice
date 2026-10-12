function Employee(name, salary, department) {
  this.name = name;
  this.salary = salary;
  this.department = department;

  function increaseSalary(amount) {
    if (amount > 0) {
      salary += amount;
    } else {
      throw new Error("error");
    }
  }
  function showDetails() {
    console.log("name : ", name);
    console.log("salary : ", salary);
    console.log("department : ", department);
  }
  return {
    increaseSalary,
    showDetails,
  };
}
const emp1 = new Employee("Adesh", 30000, "IT");
const emp2 = new Employee("omkar", 40000, "HR");

emp1.increaseSalary(5000);
emp1.showDetails();
emp2.showDetails();

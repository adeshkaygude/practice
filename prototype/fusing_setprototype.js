const user = {
  dept: "it",
  company: "abcd",
  profile() {
    console.log("name :", this.name);
  },
};

const emp1 = {
  name: "aaa",
  mobile: "111",
};

const emp2 = {
  name: "bbb",
  mobile: "222",
};

const emp3 = {
  name: "ccc",
  mobile: "333",
};

Object.setPrototypeOf(emp1, user);
Object.setPrototypeOf(emp2, user);
Object.setPrototypeOf(emp3, user);

console.log(emp1);
console.log(emp2);
console.log(emp3);

emp1.profile();
  
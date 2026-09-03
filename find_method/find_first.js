let students = [
  { name: "Adesh", marks: 65 },
  { name: "Rahul", marks: 55 },
  { name: "Amit", marks: 85 },
  { name: "Priya", marks: 90 },
];

let result = students.find((el) => {
  if (el.marks > 70) {
    return el
  }
});

console.log(result);

let students = [
  { name: "Adesh", marks: 75 },
  { name: "Rahul", marks: 62 },
  { name: "Amit", marks: 88 },
  { name: "Priya", marks: 91 },
];

let newstudent = students.map((el) => {
  return ` ${el.name} scored ${el.marks} `;
});

console.log(newstudent);

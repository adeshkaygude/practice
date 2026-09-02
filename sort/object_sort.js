let students = [
  { name: "Adesh", marks: 75 },
  { name: "Rahul", marks: 45 },
  { name: "Amit", marks: 90 },
  { name: "Priya", marks: 60 },
];

students.sort((a, b) => {
  return a.marks - b.marks;
});

console.log(students);

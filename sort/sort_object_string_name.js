let students = [
  { name: "Rahul", marks: 85 },
  { name: "Adesh", marks: 72 },
  { name: "Priya", marks: 91 },
  { name: "Amit", marks: 65 },
];

students.sort((a, b) => {
    return a.name.localeCompare(b.name);
});

console.log(students);


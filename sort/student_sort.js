let students = [
  { name: "Adesh", marks: 75 },
  { name: "Rahul", marks: 45 },
  { name: "Amit", marks: 90 },
  { name: "Priya", marks: 60 },
  { name: "Neha", marks: 90 },
];

students.sort((a, b) => {
  // First sort by marks (highest to lowest)
  if (a.marks !== b.marks) {
    return b.marks - a.marks;
  }

  // If marks are same, sort by name
  return a.name.localeCompare(b.name);
});

console.log(students);

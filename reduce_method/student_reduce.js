let students = [
  { name: "Adesh", marks: 85 },
  { name: "Rahul", marks: 42 },
  { name: "Amit", marks: 91 },
  { name: "Priya", marks: 67 },
  { name: "Neha", marks: 91 },
];

let highest = students.reduce((prev, current) => {
  if (current.marks > prev.marks) {
    return current;
  }

  return prev;
});

console.log(highest);

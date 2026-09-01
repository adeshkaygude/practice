let students = [
  { name: "Adesh", marks: 85 },
  { name: "Rahul", marks: 42 },
  { name: "Amit", marks: 67 },
  { name: "Priya", marks: 35 },
];

let result = students.map((el) => {
  if (el.marks >= 40) {
    el.result = "pass";
  } else {
    el.result = "fail";
  }

  return el;
});

console.table(result);

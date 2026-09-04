let students = [
  { name: "Adesh", marks: 85 },
  { name: "Rahul", marks: 35 },
  { name: "Amit", marks: 72 },
  { name: "Priya", marks: 28 },
];

let ans = students.flatMap((el) => {
  return el.marks >= 40 ? [el.name, "pass"] : [el.name, "fail"];
});
console.log(ans);

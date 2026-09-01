let students = [
  { name: "Adesh", marks: 75 },
  { name: "Rahul", marks: 62 },
  { name: "Amit", marks: 88 },
  { name: "Priya", marks: 91 },
];


let marks=students.map((mark)=>
{
    return mark.marks
})
console.log(marks);

let names = ["adesh", "rahul", "amit", "priya", "sneha"];

let second = names.map((name) => {
  return (name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase());
});

console.log(second);

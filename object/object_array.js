let arr = [
  ["age", 10],
  ["city", "pune"],
  ["country", "country"],
];

function object(arr) {
  return Object.fromEntries(arr);
}

console.log(object(arr));

let arr = [10, 25, 30, 15, 40, 55, 20];

let large = 0;
let selarge = 0;

arr.forEach((el) => {
  if (el > large) {
    selarge = large;
    large = el;
  }
});

console.log(selarge);

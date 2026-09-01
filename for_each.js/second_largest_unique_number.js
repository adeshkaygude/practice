let arr = [12, 5, 18, 12, 25, 18, 30, 25];

let large = 0;
let seclarge = 0;

arr.forEach((el) => {
  if (el > large) {
    seclarge = large;
    large = el;
  } else if (el > seclarge && el != large) {
    seclarge = el;
  }
});

console.log(seclarge);

let arr = [10, 50, 30, 80, 20, 70];

let large = 0;
let second = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > large) {
    second = large;
    large = arr[i];
  } else if (arr[i] > second && arr[i] != large) {
    second = arr[i];
  }
}

console.log("Largest =", large);
console.log("Second Largest =", second);

let arr = [25, 10, 45, 5, 30];

let large = 0;
for (leti = 0; i < arr.length; i++) {
  if (arr[i] > large) {
    large = arr[i];
  }
}

console.log(large);

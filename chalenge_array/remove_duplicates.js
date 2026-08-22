let arr = [10, 20, 10, 30, 20, 40, 30];

let newarr = [];

for (let i = 0; i < arr.length; i++) {
  let isDuplicate = false;

  for (let j = 0; j < newarr.length; j++) {
    if (arr[i] == newarr[j]) {
      isDuplicate = true;
      break;
    }
  }

  if (isDuplicate == false) {
    newarr.push(arr[i]);
  }
}

console.log(newarr);

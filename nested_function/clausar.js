// function outer(start) {
//   let count = start;

//   function inner() {
//     console.log(count);
//     count++;

//     return inner;
//   }
//   return inner;
// }

// console.log("1");

// outer(10)(); // 10
// console.log("2");

// outer(10)()(); // 10 11
// console.log("3");

// outer(10)()()(); // 10 11 12

function count(n) {
  if (n === 0) {
    return;
  }

  console.log(n);
  count(n - 1);
}

count(5);

// let time = 5;

// function display() {
//   console.log(time);
//   time--;
//   if (time === 0) {
//     clearInterval(timer);
//     console.log("time over ");
//   }
// }

// const timer = setInterval(display, 1000);

let anser = [];
let list = [0, 25, 30, 0, 45, 10, 5, 0, 0];
for (let i = 0; i < list.length; i++) {
  if (list[i] === 0) {
    anser.push(list[i]);
  } else {
    anser.unshift(list[i]);
  }
}
console.log(anser);

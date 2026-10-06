const time = setInterval(() => {
  console.log("hello");
}, 1000);

setTimeout(() => {
  clearInterval(time);
}, 5000);


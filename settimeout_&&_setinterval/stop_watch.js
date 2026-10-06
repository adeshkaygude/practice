let time = 5;

const interval = setInterval(() => {
  console.log(time);

  time--;
  if (time === 0) {
    clearInterval(interval);
    console.log("Time over");
  }
});

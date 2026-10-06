let time = 5;

function display() {
  console.log(time);
  time--;
  if (time === 0) {
    clearInterval(timer);
    console.log("time over ");
  }
}

const timer = setInterval(display, 1000);

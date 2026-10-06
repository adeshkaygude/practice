function print(msg) {
  console.log(msg);
}

const msg_p = setInterval(print, 1000, "adesh");

function stop(msg_p) {
  clearInterval(msg_p);
}

setTimeout(stop, 3030, msg_p);

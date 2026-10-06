function world(name) {
  console.log("hello", name);
}

const interv = setInterval(world, 1000, "adesh");

setTimeout(() => {
  clearInterval(interv);
}, 5000);

function random(length) {
  let ans = "";

  let str = "qwertyuiopasdfghjklzxcvbnm";

  for (let i = 0; i < length; i++) {
    let min = 0;

    let max = str.length - 1;

    let random = Math.floor(Math.random() * (max - min + 1)) + min;

    ans += str.charAt(random);
  }

  return ans;
}

console.log(random(3));

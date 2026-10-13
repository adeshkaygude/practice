function reverse(str) {
  let rev = "";
  for (let i = 0; i < str.length; i++) {
    rev = str[i] += rev;
  }
  return rev;
}
console.log(reverse("adesh"));

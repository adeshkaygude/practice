let string = "adesh adesh ades kaygude ";
let strrev = "";
for (let i = 0; i < string.length; i++) {
  strrev = string.charAt(i) + strrev;
}
if (string == strrev) {
  console.log("string is palindrome");
} else {
  console.log("string are not palindrome");
}

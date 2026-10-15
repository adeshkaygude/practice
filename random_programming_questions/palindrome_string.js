let str = "madam";
function palindrome(str) {
  let revstr = "";

  for (i of str) {
    revstr = i + revstr;
  }
  return str === revstr ? `${str} are palindrome` : `${str} are not prime`;
}

console.log(palindrome(str));

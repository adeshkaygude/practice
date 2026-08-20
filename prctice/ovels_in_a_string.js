let str = "abiou aeiou aeiou";

let ovels = "";
let count = 0;

for (let i = 0; i < str.length; i++) {
  if (
    str.charAt(i) == "a" ||
    str.charAt(i) == "e" ||
    str.charAt(i) == "i" ||
    str.charAt(i) == "o" ||
    str.charAt(i) == "u"
  ) {
    ovels += " " + str[i];
    count++;
  }
}

console.log(ovels);
console.log(count);

// secont logic

let str2 = "adesh laxman kaygude ";

let cout = 0;
let ove = "";

for (let i = 0; i < str2.length; i++) {
  let ch = str2.charAt(i);

  if ("aeiou".includes(ch)) {
    ove += " " + ch;
    cout++;
  }
}
console.log(ove);
console.log(cout);

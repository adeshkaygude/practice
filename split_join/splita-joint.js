let str = "I love JavaScript";

let newstr = str.split(" ").join("-");

console.log(newstr);

let arr = [15, 22, 35, 48, 60, 75];
let newarr = arr.join("");

console.log(newarr);

//string to array
let array = Array.from(newarr);
console.log(array);

// array of
let arr2 = Array.of(10, 20, 30, 40);

console.log(arr2);

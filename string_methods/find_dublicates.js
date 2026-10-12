function find_dublicates(str) {
  let find_dublicates = [];

  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str[i] === str[j]) {
        find_dublicates.push(str[i]);
      }
    }
  }

  return find_dublicates;
}

console.log(find_dublicates("programming"));

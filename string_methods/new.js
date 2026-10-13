function areAnagrams(first, second) {
  first = first.toLowerCase();
  second = second.toLowerCase();

  if (first.length !== second.length) {
    return false;
  }

  for (let i = 0; i < first.length; i++) {
    let count1 = 0;
    let count2 = 0;

    for (let j = 0; j < first.length; j++) {
      if (first[i] === first[j]) {
        count1++;
      }

      if (first[i] === second[j]) {
        count2++;
      }
    }

    if (count1 !== count2) {
      return false;
    }
  }

  return true;
}

console.log(areAnagrams("listen", "silent"));
console.log(areAnagrams("hello", "world"));

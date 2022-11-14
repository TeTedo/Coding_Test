function naiveSearch(str1, str2) {
  let count = 0;
  for (let i = 0; i <= str1.length - str2.length; i++) {
    for (let k = 0; k < str2.length; k++) {
      if (str1[i + k] !== str2[k]) break;
      if (k === str2.length - 1) count++;
    }
  }
  return count;
}

console.log(naiveSearch("lorie loled", "lol"));

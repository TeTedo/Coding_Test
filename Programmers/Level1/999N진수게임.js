function solution(n, t, m, p) {
  let word = "";
  let result = "";
  for (let i = 0; i < t * m; i++) {
    word += i.toString(n);
    if (word.length >= t * m) break;
  }
  for (let k = p; k <= word.length; k += m) {
    result += word[k - 1].toUpperCase();
    if (result.length == t) break;
  }
  return result;
}

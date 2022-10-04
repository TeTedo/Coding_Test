// /https://school.programmers.co.kr/learn/courses/30/lessons/120878
function solution(a, b) {
  let maxD = a;
  let [c, d] = a > b ? [a, b] : [b, a];
  for (let r; (r = c % d); c = d, d = r) {
    maxD = r;
  }
  b = b / maxD;
  while (true) {
    if (b <= 1) return 1;
    if (b % 2 && b % 5) return 2;
    if (b % 2 == 0) b = b / 2;
    if (b % 5 == 0) b = b / 5;
  }
}

//다른사람 풀이 본후
function solution(a, b) {
  return Number((a / b).toFixed(10)) == a / b ? 1 : 2;
}

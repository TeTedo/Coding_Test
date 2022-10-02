//https://school.programmers.co.kr/learn/courses/30/lessons/120830

function solution(n, k) {
  k = k - Math.floor(n / 10);
  return 12000 * n + 2000 * k;
}

// ~~ = Math.floor 처럼 사용할수 있는데 더 빠르다.
function solution(n, k) {
  k -= ~~(n / 10);
  return 12000 * n + 2000 * k;
}

//https://school.programmers.co.kr/learn/courses/30/lessons/42842

function solution(brown, yellow) {
  const total = brown + yellow;
  for (let i = brown / 2 - 1; i > 0; i--) {
    for (let k = i; k > 0; k--) {
      if (i * k == total && (i - 2) * (k - 2) == yellow) {
        return [i, k];
      }
    }
  }
}

// 이중 for문 없애기
function solution(brown, yellow) {
  const total = brown + yellow;
  for (let i = brown / 2 - 1; i > 0; i--) {
    if (total % i == 0 && (i - 2) * (total / i - 2) == yellow) {
      return [i, total / i];
    }
  }
}

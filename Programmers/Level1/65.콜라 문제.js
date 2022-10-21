//https://school.programmers.co.kr/learn/courses/30/lessons/132267

function solution(a, b, n) {
  var answer = 0;
  let maxGiv = 0;
  while (a <= n) {
    maxGiv = ~~(n / a);
    answer += maxGiv * b;
    n = n - maxGiv * (a - b);
  }
  return answer;
}

// 다른사람풀이 보고

solution = (a, b, n) => Math.floor(Math.max(n - b, 0) / (a - b)) * b;

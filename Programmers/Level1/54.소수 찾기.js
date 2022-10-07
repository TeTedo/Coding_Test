//https://school.programmers.co.kr/learn/courses/30/lessons/12921

function solution(n) {
  var answer = 0;
  for (let i = 3; i <= n; i += 2) {
    let num = true;
    for (let k = 2; k <= Math.sqrt(i); k++) {
      if (i % k == 0) {
        num = false;
        break;
      }
    }
    if (num) answer += 1;
  }
  if (n >= 2) answer += 1;
  return answer;
}

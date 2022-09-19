//https://school.programmers.co.kr/learn/courses/30/lessons/12941
function solution(A, B) {
  var answer = [];

  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);
  answer = A.reduce((acc, cur, idx) => acc + cur * B[idx], 0);
  return answer;
}

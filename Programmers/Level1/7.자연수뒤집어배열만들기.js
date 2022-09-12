//https://school.programmers.co.kr/learn/courses/30/lessons/12932

function solution(n) {
  var answer = [];
  answer = (n + "")
    .split("")
    .reverse()
    .map((el) => parseInt(el));

  return answer;
}

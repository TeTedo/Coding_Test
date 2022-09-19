//https://school.programmers.co.kr/learn/courses/30/lessons/12917#

function solution(s) {
  var answer = "";
  answer = s.split("").sort().reverse().join("");
  return answer;
}

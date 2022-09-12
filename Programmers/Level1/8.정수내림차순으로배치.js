//https://school.programmers.co.kr/learn/courses/30/lessons/12933
function solution(n) {
  var answer = 0;
  answer = parseInt(
    (n + "")
      .split("")
      .map((el) => parseInt(el))
      .sort((a, b) => b - a)
      .join("")
  );
  return answer;
}

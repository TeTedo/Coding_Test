//https://school.programmers.co.kr/learn/courses/30/lessons/12903
function solution(s) {
  var answer = "";
  const length = s.length;
  answer =
    length % 2 == 1
      ? s.charAt(length / 2)
      : s.charAt(length / 2 - 1) + s.charAt(length / 2);
  return answer;
}

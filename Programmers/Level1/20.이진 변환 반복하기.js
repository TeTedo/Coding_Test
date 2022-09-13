//https://school.programmers.co.kr/learn/courses/30/lessons/70129

function solution(s) {
  var answer = [];
  let count = 0;
  let removeZero = 0;
  while (true) {
    count++;
    removeZero += s.split("0").length - 1;
    s = s.split("0").join("").length.toString(2);
    if (s == 1) break;
  }
  answer = [count, removeZero];
  return answer;
}

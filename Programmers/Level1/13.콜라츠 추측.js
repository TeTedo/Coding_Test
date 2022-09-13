//https://school.programmers.co.kr/learn/courses/30/lessons/12943

function solution(num) {
  var answer = 0;
  while (num > 1) {
    num = num % 2 ? num * 3 + 1 : num / 2;
    answer++;
  }
  answer = answer >= 500 ? -1 : answer;
  return answer;
}

//https://school.programmers.co.kr/learn/courses/30/lessons/12982

function solution(d, budget) {
  var answer = 0;
  d = d.sort((a, b) => a - b);
  let temp = 0;
  for (const value of d) {
    temp += value;
    if (temp > budget) {
      break;
    }
    answer += 1;
  }
  return answer;
}

//https://school.programmers.co.kr/learn/courses/30/lessons/12922
function solution(n) {
  var answer = "";
  for (let i = 0; i < Math.floor(n / 2); i++) {
    answer += "수박";
  }
  if (n % 2 == 1) {
    answer += "수";
  }
  return answer;
}

// 다른사람 풀이본후
function solution(n) {
  var answer = "";
  answer = n % 2 == 1 ? "수박".repeat(n / 2) + "수" : "수박".repeat(n / 2);
  return answer;
}

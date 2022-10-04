//https://school.programmers.co.kr/learn/courses/30/lessons/12924

function solution(n) {
  var answer = 1;
  const startNum = Math.ceil(n / 2);
  for (let i = startNum; i > 0; i--) {
    let temp = i;
    for (let j = i - 1; j > 0; j--) {
      temp += j;
      if (temp == n) {
        answer += 1;
      } else if (temp > n) {
        break;
      }
    }
  }
  return answer;
}


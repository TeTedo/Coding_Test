//https://school.programmers.co.kr/learn/courses/30/lessons/131705

function solution(number) {
  let answer = 0;
  for (let i = 0; i < number.length - 2; i++) {
    for (let k = i + 1; k < number.length - 1; k++) {
      for (let j = k + 1; j < number.length; j++) {
        if (number[i] + number[k] + number[j] == 0) answer += 1;
      }
    }
  }
  return answer;
}

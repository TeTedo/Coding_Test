//https://school.programmers.co.kr/learn/courses/30/lessons/12910

function solution(arr, divisor) {
  var answer = [];
  arr.forEach((el) => {
    if (el % divisor == 0) {
      answer.push(el);
    }
  });
  if (!answer.length) answer.push(-1);
  return answer.sort((a, b) => a - b);
}

// 다른사람 풀이 본후
function solution(arr, divisor) {
  var answer = [];
  answer = arr.filter((el) => el % divisor == 0);
  return answer.length == 0 ? [-1] : answer.sort((a, b) => a - b);
}

// 속도는 비슷 filter로 깔끔하게 풀수 있음

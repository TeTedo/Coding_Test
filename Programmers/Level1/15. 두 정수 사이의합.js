//https://school.programmers.co.kr/learn/courses/30/lessons/12912

// 첫번째
function solution(a, b) {
  var answer = 0;
  const arr = [a, b].sort((a, b) => a - b);
  for (let i = arr[0]; i <= arr[1]; i++) {
    answer += i;
  }
  return answer;
}

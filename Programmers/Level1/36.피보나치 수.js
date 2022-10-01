//https://school.programmers.co.kr/learn/courses/30/lessons/12945

function solution(n) {
  let answer = [0, 1];
  for (let i = 2; i <= n; i++) {
    answer[i] = BigInt(BigInt(answer[i - 1]) + BigInt(answer[i - 2]));
  }
  return answer[n] % BigInt(1234567);
}

// https://school.programmers.co.kr/learn/courses/30/lessons/77884

function solution(left, right) {
  var answer = 0;
  for (let i = left; i <= right; i++) {
    const divisor = [];
    for (let k = 1; k <= i; k++) {
      if (i % k == 0) {
        divisor.push(k);
      }
    }
    answer += divisor.length % 2 ? -i : i;
  }
  return answer;
}

// 다른사람 풀이 본후
// 제곱근이 정수면 약수의 개수는 짝수이다.

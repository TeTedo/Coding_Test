//https://school.programmers.co.kr/learn/courses/30/lessons/12945

function solution(n) {
  let answer = [0, 1];
  for (let i = 2; i <= n; i++) {
    answer[i] = BigInt(BigInt(answer[i - 1]) + BigInt(answer[i - 2]));
  }
  return answer[n] % BigInt(1234567);
}

// 처음에 그냥 BigInt 없이 풀었는데 계속 실패
// 실패한 이유가 숫자가 너무 커져버려서 number의 맥스값을 초과했다고 생각
// 구글링 해보니 BigInt의 존재를 알게 됬고 이는 수의 제한이 없다는것을 알았다.
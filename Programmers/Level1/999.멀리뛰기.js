//https://school.programmers.co.kr/learn/courses/30/lessons/12914#

function solution(n) {
  let answer = 0;
  for (let i = 0, j = n; i <= n / 2; i++, j--) {
    let temp = 1;
    for (let k = j, l = i; k > j - i; k--, l--) {
      temp *= k / l;
    }
    answer += temp;
  }
  return answer % 1234567;
}
// 팩토리얼로 풀기
// 테스트케이스 7번부터 다실패 => temp가 너무 큰수일수도 있다고 생각

function solution(n) {
  let answer = BigInt(0);
  for (let i = 0, j = n; i <= n / 2; i++, j--) {
    let temp = BigInt(1);
    for (let k = j, l = i; k > j - i; k--, l--) {
      temp *= BigInt(k / l);
    }
    answer += temp;
  }
  return answer % BigInt(1234567);
}

// BigInt로 풀어봤는데 런타임 에러

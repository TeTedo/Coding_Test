//https://school.programmers.co.kr/learn/courses/30/lessons/12940

function solution(n, m) {
  var answer = [];
  // 최대 공약수
  for (let i = 1; i <= Math.min(n, m); i++) {
    if (n % i == 0 && m % i == 0) {
      answer[0] = i;
    }
  }
  // 최소 공배수
  for (let i = m; i <= m * n; i = i + m) {
    if (i % n == 0) {
      answer[1] = i;
      break;
    }
  }
  return answer;
}

// 다른사람 풀이 본후
// 최소공배수 = a * b  / 최대공약수
function solution(n, m) {
  var answer = [];

  for (let i = 1; i <= Math.min(n, m); i++) {
    if (n % i == 0 && m % i == 0) {
      answer = [i, (m * n) / i];
    }
  }
  return answer;
}

// 유클리드 호재법
function solution(a, b) {
  var answer = [];
  let r;
  for (var ab = a * b; (r = a % b); a = b, b = r) {}
  answer = [b, ab / b];

  return answer;
}
//https://myjamong.tistory.com/138

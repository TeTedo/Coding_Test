//school.programmers.co.kr/learn/courses/30/lessons/12934

// 1차 내 풀이
function solution(n) {
  var answer = 0;
  for (let i = 1; i <= n; i++) {
    if (i ** 2 > n) {
      break;
    }

    if (i ** 2 == n) {
      answer = (i + 1) ** 2;
      break;
    }

    answer = -1;
  }
  return answer;
}

// 다른사람풀이 참고후 다시풀이
// Math.sqrt (루트값 참고함)
// 위의 풀이는 n값이 커질수록 for문을 돌려야하므로 시간이 오래걸린다.
// 하지만 아래 풀이는 제곱근을 바로찾아 실행하므로 시간소요가 더 적음
function solution(n) {
  var answer = 0;
  const root = Math.sqrt(n);
  if (root == Math.floor(root)) {
    answer = (root + 1) ** 2;
  } else {
    answer = -1;
  }
  return answer;
}

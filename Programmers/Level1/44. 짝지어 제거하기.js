//https://school.programmers.co.kr/learn/courses/30/lessons/12973

function solution(s) {
  var answer = 0;
  s = s.split("");
  for (let i = 0; i < s.length; i++) {
    s = s.filter((el, index) => el !== s[index + 1] && el !== s[index - 1]);
    if (!s.join("")) return 1;
  }
  return 0;
}

// 시간초과

function solution(s) {
  for (let i = 0; i < s.length; i++) {
    if (s[i] == s[i + 1]) {
      s = s.substring(0, i) + s.substring(i + 2);
      i -= i ? 2 : 1;
    }

    if (!s) return 1;
  }
  return 0;
}

// 효율성테스트 시간초과

function solution(s) {
  for (let i = s.length-1; i >0; i--) {
    if (s[i] == s[i - 1]) {
      s = s.split(s[i] + s[i-1]).join("")
    }
    if (s == "") return 1;
  }
  return 0;
}
// 효율성테스트 시간초과
// 이방법보다 위 방법이 더 빨랐음. 배열 메서드들 이용하면 O(N)


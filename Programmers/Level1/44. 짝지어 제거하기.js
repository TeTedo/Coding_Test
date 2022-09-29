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
      s = s.substring(0,i-1) + s.substring(i+1)
    }
    if (s == "") return 1;
  }
  return 0;
}

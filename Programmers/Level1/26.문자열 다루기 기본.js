// https://school.programmers.co.kr/learn/courses/30/lessons/12918

// 내풀이
function solution(s) {
  var answer = true;
  const number = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  for (let i = 0; i < s.length; i++) {
    if (number.indexOf(+s[i]) == -1) {
      answer = false;
      break;
    }
  }
  if (s.length < 4 || s.length > 6 || s.length == 5) {
    answer = false;
  }
  return answer;
}

// 다른사람 풀이 본후
function solution(s) {
  const reg = /^\d{4}$|^\d{6}$/;
  return reg.test(s);
}

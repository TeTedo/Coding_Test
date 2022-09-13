//https://school.programmers.co.kr/learn/courses/30/lessons/12939

// 첫번쨰 풀이
function solution(s) {
  var answer = "";
  const arr = s.split(" ").sort((a, b) => +a - +b);
  answer = `${arr[0]} ${arr.at(-1)}`;
  return answer;
}

// 다른사람 풀이 본후
function solution(s) {
  var answer = "";
  const arr = s.split(" ");
  answer = Math.min(...arr) + " " + Math.max(...arr);
  return answer;
}

// 아래 풀이가 속도가 더 빠르다

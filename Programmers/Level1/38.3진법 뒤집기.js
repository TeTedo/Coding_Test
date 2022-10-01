// /https://school.programmers.co.kr/learn/courses/30/lessons/68935

function solution(n) {
  var answer;
  answer = n.toString(3).split("").reverse().join("");

  return +parseInt(answer, 3).toString(10);
}

// 다른사람 풀이 본후
function solution(n) {
  var answer;
  answer = parseInt(n.toString(3).split("").reverse().join(""), 3);

  return answer;
}

// parseInt의 뒤에 진수를 입력하면 10진수 number 형으로 반환해준다.

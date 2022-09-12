// https://school.programmers.co.kr/learn/courses/30/lessons/12916

// 첫번째 풀이
function solution(s) {
  var answer = true;
  if (s.match(/P/gi).length == s.match(/Y/gi).length) {
    answer = true;
  } else {
    answer = false;
  }

  return answer;
}

// 실패 이유 : 런타임 에러 => match가 실행속도가 느린것같음

// 2번째 풀이
function solution(s) {
  var answer = true;
  const string = s.toUpperCase().split("");
  let pvalue = 0;
  let yvalue = 0;
  string.forEach((el) => {
    if (el == "P") {
      pvalue++;
    } else if (el == "Y") {
      yvalue++;
    }
  });

  if (pvalue !== yvalue) {
    answer = false;
  }

  return answer;
}

// 다른사람 풀이본후 풀이
function solution(s) {
  return s.toUpperCase().split("P").length == s.toUpperCase().split("Y").length;
}

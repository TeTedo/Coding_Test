//https://school.programmers.co.kr/learn/courses/30/lessons/12951

//1번째 풀이
function solution(s) {
  var answer = "";
  answer = s
    .toLowerCase()
    .split(" ")
    .map((v) => v.replace(/^./, v[0].toUpperCase()))
    .join(" ");
  return answer;
}
//런타임 에러 => replace가 런타임에러를 일으킨거 같다.

//2번째 풀이
function solution(s) {
  var answer = "";
  answer = s
    .toLowerCase()
    .split(" ")
    .map((v) => v.split(""));
  answer.forEach((el) => el.splice(0, 1, el[0].toUpperCase()));
  answer = answer.map((v) => v.join("")).join(" ");
  return answer;
}

// 런타임 에러 => 반복문이 너무 많아서 에러가 뜬거같다.

// mdn 에서 string.method() 찾아봄

//3번째 풀이
function solution(s) {
  var answer = "";
  answer = s
    .toLowerCase()
    .split(" ")
    .map((v) => (v = v[0].toUpperCase() + v.slice(1)))
    .join(" ");

  return answer;
}

// 런타임 에러.. 반복문이 1개만들어가도 런타임에러..

//4번째 풀이
function solution(s) {
  var answer = "";
  answer = s.toLowerCase().split(" ");
  for (let i = 0; i < answer.length; i++) {
    if (answer[i]) {
      answer[i] = answer[i][0].toUpperCase() + answer[i].slice(1);
    }
  }
  return answer.join(" ");
}

// 런타임 에러는 공백의 문제였던걸로 추측한다. 공백에 대한 조건을 넣어주니 성공..

//다른사람 풀이 본후
function solution(s) {
  var answer = "";
  answer = s
    .split(" ")
    .map((v) => v.charAt(0).toUpperCase() + v.substring(1).toLowerCase())
    .join(" ");
  return answer;
}


// charAt(i)와 string[i]의 차이점
// 참고 https://thisthat.dev/string-char-at-vs-string-bracket-notation/
//https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/charAt
// charAt은 어떻게든 i를 인덱스로 가지려고 함 => 1.23 같이 float을 넣으면 1로 검색
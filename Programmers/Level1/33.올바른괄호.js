//https://school.programmers.co.kr/learn/courses/30/lessons/12909

function solution(s) {
  var answer = true;
  s = s.split("");
  while (true) {
    const idx1 = s.indexOf("(");
    const idx2 = s.indexOf(")");

    if (idx2 < idx1 || idx1 == -1 || idx2 == -1) {
      answer = false;
      break;
    }

    s.splice(idx2, 1);
    s.splice(idx1, 1);

    if (s.join("") == "") {
      break;
    }
  }
  return answer;
}

// 런타임 오류

function solution(s) {
  var answer = true;
  while (true) {
    const idx1 = s.indexOf("(");
    const idx2 = s.indexOf(")");

    if (idx2 < idx1 || idx1 == -1 || idx2 == -1) {
      answer = false;
      break;
    }

    s = "".concat(s.slice(0, idx1), s.slice(idx1 + 1, idx2), s.slice(idx2 + 1));

    if (s == "") {
      break;
    }
  }
  return answer;
}

// 런타임오류

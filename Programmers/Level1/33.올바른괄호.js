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

// 효율성 실패

function solution(s) {
  var answer = true;
  const length = s.length;
  for (let i = 0; i < length / 2; i++) {
    const idx1 = s.indexOf("(");
    const idx2 = s.indexOf(")");

    if (idx2 < idx1 || idx1 == -1 || idx2 == -1) {
      answer = false;
      break;
    }

    s = s.split("()").join("");
    if (s == "") break;
  }
  return answer;
}
// 효율성 실패

function solution(s) {
  if (s.length % 2) return false;
  const leftLen = s.split("(").length;
  const rightLen = s.split(")").length;
  if (leftLen !== rightLen) return false;

  while (true) {
    if (s[0] === ")" || s.at(-1) === "(") {
      return false;
    }

    s = s.split("()").join("");

    if (s === "") return true;
  }
}
<<<<<<< HEAD
// 효율성 1번만 실패
=======
// 효율성 실패

function solution(s) {
  let count = 0;
  for (const value of s) {
    count += value == "(" ? 1 : -1;
    if (count < 0) return false;
  }

  return count == 0 ? true : false;
}

// split과 join을 계속 하는거보다 s의 인덱스로 접근해서 쌓는게 더 빠른듯
>>>>>>> c49c6989c4156910106115f0ec87fec1c15f4882

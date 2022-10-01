//https://school.programmers.co.kr/learn/courses/30/lessons/12930

function solution(s) {
  var answer = [];
  s.split(" ").reduce((acc, cur) => {
    for (let i = 0; i < cur.length; i++) {
      if (i % 2) {
        cur =
          cur.substring(0, i) +
          cur.charAt(i).toLowerCase() +
          cur.substring(i + 1);
      } else {
        cur =
          cur.substring(0, i) +
          cur.charAt(i).toUpperCase() +
          cur.substring(i + 1);
      }
    }
    answer.push(cur);
  }, "");

  return answer.join(" ");
}

// 좀더 가독성 좋게 풀어봄
function solution(s) {
  var answer = [];
  s.split(" ").reduce((acc, cur) => {
    let temp = "";
    for (let i = 0; i < cur.length; i++) {
      if (i % 2) {
        temp += cur[i].toLowerCase();
      } else {
        temp += cur[i].toUpperCase();
      }
    }
    answer.push(temp);
  }, "");

  return answer.join(" ");
}

// 다른사람 풀이 참고
function toWeirdCase(s) {
  return s.toUpperCase().replace(/(\w)(\w)/g, function (a) {
    return a[0].toUpperCase() + a[1].toLowerCase();
  });
}

// replace에서 두번째에 콜백을 넣어줄수 있는것을 처음알음
// replace에서 2번째 매개변수로 첫번째 정규표현식에 성립하는 값이 들어간다는것을 알았다.

//https://school.programmers.co.kr/learn/courses/30/lessons/131128

function solution(X, Y) {
  var answer = [];
  for (let i = 0; i < X.length; i++) {
    if (Y.includes(X[i])) {
      answer.push(X[i]);
      Y = Y.replace(X[i], "");
    }
  }
  return answer.length == 0
    ? "-1"
    : BigInt(answer.sort((a, b) => b - a).join("")) + "";
}

// 런타임 오류 for문안에서 replace를 불러와서 시간복잡도 O(n^2) 이상이라고 생각
// 시간 복잡도를 위해 O(n)으로 풀방법을 생각

function solution(X, Y) {
  //X 요소들 배열에 넣기
  const obj1 = {};
  for (let i = 0; i < X.length; i++) {
    obj1[X[i]] ? (obj1[X[i]] += 1) : (obj1[X[i]] = 1);
  }
  //요소들 비교해서 있으면 temp배열에 채우기
  const temparr = [];
  for (let j = 0; j < Y.length; j++) {
    if (obj1[Y[j]]) {
      obj1[Y[j]] -= 1;
      temparr.push(Y[j]);
    }
  }
  const answer = temparr.sort((a, b) => b - a).join("");
  return answer[0] == 0 ? "0" : answer ? answer : "-1";
}

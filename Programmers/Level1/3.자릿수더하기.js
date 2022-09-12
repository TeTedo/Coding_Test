//school.programmers.co.kr/learn/courses/30/lessons/12931

function solution(n) {
  var answer = 0;
  const arr = String(n).split("");

  return (answer = arr.reduce((acc, cur) => {
    acc += Number(cur);
    return acc;
  }, 0));
}

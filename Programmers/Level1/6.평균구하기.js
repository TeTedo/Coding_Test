//https://school.programmers.co.kr/learn/courses/30/lessons/12944

function solution(arr) {
  var answer = 0;
  const total = arr.reduce((acc, cur) => {
    acc += cur;
    return acc;
  });
  answer = total / arr.length;
  return answer;
}

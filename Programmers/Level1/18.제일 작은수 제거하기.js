//https://school.programmers.co.kr/learn/courses/30/lessons/12935

// 첫번째 풀이
function solution(arr) {
  var answer = [];
  const temparr = [...arr];
  arr.splice(arr.indexOf(temparr.sort((a, b) => a - b)[0]), 1);
  answer = arr.length == 0 ? [-1] : arr;
  return answer;
}

// 다른사람 풀이 본후
function solution(arr) {
  arr.splice(arr.indexOf(Math.min(...arr)), 1);
  if (!arr.length) arr.push(-1);
  return arr;
}

// min으로 찾는게 sort보다 훨씬 빠름

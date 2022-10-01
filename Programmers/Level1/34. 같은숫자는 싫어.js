//https://school.programmers.co.kr/learn/courses/30/lessons/12906

// 첫번째 풀이
function solution(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i + 1]) {
      arr.splice(i, 1);
      i--;
    }
  }
  return arr;
}
// 효율성 테스트 시간초과
// splice로 계속 접근해서 시간이 더 걸린거같다.

function solution(arr) {
  let answer = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != arr[i + 1]) {
      answer.push(arr[i]);
    }
  }
  return answer;
}

// 새로운 배열을 만들어줌
// 다른사람 풀이 본 후
function solution(arr) {
  return arr.filter((val, index) => val != arr[index + 1]);
}

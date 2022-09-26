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
// for문을 돌려서 초과한거 같음

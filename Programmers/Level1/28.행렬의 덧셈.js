//https://school.programmers.co.kr/learn/courses/30/lessons/12950
function solution(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let k = 0; k < arr1[i].length; k++) {
      arr1[i][k] += arr2[i][k];
    }
  }
  return arr1;
}

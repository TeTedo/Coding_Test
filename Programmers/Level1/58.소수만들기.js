//https://school.programmers.co.kr/learn/courses/30/lessons/12977

function solution(nums) {
  let plus = [];
  let answer = 0;
  for (let i = 0; i < nums.length - 2; i++) {
    for (let k = i + 1; k < nums.length - 1; k++) {
      for (let j = k + 1; j < nums.length; j++) {
        plus.push(nums[i] + nums[k] + nums[j]);
      }
    }
  }
  for (let i = 0; i < plus.length; i++) {
    let sosu = true;
    if (plus[i] % 2 == 0) continue;
    for (let k = 3; k <= Math.sqrt(plus[i]); k += 2) {
      if (plus[i] % k == 0) {
        sosu = false;
        break;
      }
    }
    if (sosu) answer += 1;
  }
  return answer;
}

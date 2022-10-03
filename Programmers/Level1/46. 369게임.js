//https://school.programmers.co.kr/learn/courses/30/lessons/120891

function solution(order) {
  return order
    .toString()
    .split("")
    .filter((el) => el == 3 || el == 6 || el == 9).length;
}

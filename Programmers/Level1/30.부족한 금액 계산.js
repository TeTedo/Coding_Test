//https://school.programmers.co.kr/learn/courses/30/lessons/82612

function solution(price, money, count) {
  var answer = 0;
  let totalPrice = 0;
  for (let i = 1; i <= count; i++) {
    totalPrice += price * i;
  }
  answer = money >= totalPrice ? 0 : totalPrice - money;
  return answer;
}

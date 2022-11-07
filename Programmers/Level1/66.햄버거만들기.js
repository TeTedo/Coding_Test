//https://school.programmers.co.kr/learn/courses/30/lessons/133502

function solution(ingredient) {
  let stack = [];
  let answer = 0;
  for (let i = 0; i < ingredient.length; i++) {
    stack.push(ingredient[i]);
    if (
      stack.at(-1) == 1 &&
      stack.at(-2) == 3 &&
      stack.at(-3) == 2 &&
      stack.at(-4) == 1
    ) {
      stack.pop();
      stack.pop();
      stack.pop();
      stack.pop();
      answer++;
    }
  }
  return answer;
}

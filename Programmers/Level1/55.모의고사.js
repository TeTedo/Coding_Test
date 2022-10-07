//https://school.programmers.co.kr/learn/courses/30/lessons/42840

function solution(answers) {
  const length = answers.length;
  let a = "12345".repeat(Math.ceil(length / 5));
  let b = "21232425".repeat(Math.ceil(length / 8));
  let c = "3311224455".repeat(Math.ceil(length / 10));
  let answer = [0, 0, 0];
  for (let i = 0; i < answers.length; i++) {
    if (answers[i] == +a[i]) answer[0] += 1;
    if (answers[i] == +b[i]) answer[1] += 1;
    if (answers[i] == +c[i]) answer[2] += 1;
  }
  const max = Math.max(...answer);
  return answer
    .map((v, index) => [v, index + 1])
    .filter((v) => v[0] == max)
    .map((v) => v[1]);
}

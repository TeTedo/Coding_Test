//https://school.programmers.co.kr/learn/courses/30/lessons/77484

function solution(lottos, win_nums) {
  const correct = lottos.filter((v) => win_nums.includes(v)).length;
  const mistery = lottos.filter((v) => !v).length;
  const high = Math.min(6, 7 - correct - mistery);
  const low = Math.min(6, 7 - correct);
  return [high, low];
}

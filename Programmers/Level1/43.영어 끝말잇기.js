//https://school.programmers.co.kr/learn/courses/30/lessons/12981

function solution(n, words) {
  var answer = [];

  for (let i = 1; i < words.length; i++) {
    answer[0] = (i + 1) % n || n;
    answer[1] = Math.ceil((i + 1) / n);

    if (i !== words.indexOf(words[i])) return answer;
    if (words[i - 1].at(-1) !== words[i].at(0)) return answer;
  }
  return [0, 0];
}

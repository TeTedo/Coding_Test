//https://school.programmers.co.kr/learn/courses/30/lessons/120812

function solution(array) {
  let obj = {};
  for (let i = 0; i < array.length; i++) {
    obj[array[i]] = obj[array[i]] ? obj[array[i]] + 1 : 1;
  }
  const answer = Object.keys(obj).sort((a, b) => obj[b] - obj[a]);
  return obj[answer[0]] == obj[answer[1]] ? -1 : +answer[0];
}

// 다른사람 풀이 본 후

function solution(array) {
  const freq = {};

  for (const n of array) {
    freq[n] = (freq[n] || 0) + 1;
  }

  const keys = Object.keys(freq);

  keys.sort((a, b) => freq[b] - freq[a]);

  const max = keys[0];

  return freq[keys[0]] === freq[keys[1]] ? -1 : +max;
}

// 객체 에 값넣을때 || 사용

function solution(array) {
  let m = new Map();
  for (let n of array) m.set(n, (m.get(n) || 0) + 1);
  m = [...m].sort((a, b) => b[1] - a[1]);
  return m.length === 1 || m[0][1] > m[1][1] ? m[0][0] : -1;
}
// Map으로 객체 만들기

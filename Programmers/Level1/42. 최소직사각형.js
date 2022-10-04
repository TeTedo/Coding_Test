//https://school.programmers.co.kr/learn/courses/30/lessons/86491

function solution(sizes) {
  sizes = sizes.map((el) => el.sort((a, b) => a - b));
  len1 = sizes.sort((a, b) => b[0] - a[0])[0][0];
  len2 = sizes.sort((a, b) => b[1] - a[1])[0][1];
  return len1 * len2;
}


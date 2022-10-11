//https://school.programmers.co.kr/learn/courses/30/lessons/12953

function solution(arr) {
  return arr.reduce((a, b) => {
    [a, b] = a > b ? [a, b] : [b, a];
    let r;
    for (var ab = a * b; (r = a % b); a = b, b = r) {}
    return (a = ab / b);
  });
}

//https://school.programmers.co.kr/learn/courses/30/lessons/120863#

function solution(polynomial) {
  let coefficient = 0;
  let constant = 0;
  polynomial = polynomial.split(" + ");
  for (let i = 0; i < polynomial.length; i++) {
    if (polynomial[i].includes("x"))
      coefficient += parseInt(polynomial[i]) || 1;
    else constant += +polynomial[i];
  }
  if (coefficient == 1) coefficient = "";
  const answer = [coefficient + "x", constant.toString()];
  return answer.filter((v) => v[0] != 0).join(" + ");
}

//다른 사람 풀이 본후
function solution(p) {
  var [x, c] = p.split("+").reduce(
    ([a, b], s) => {
      if (s.includes("x")) {
        return [a + Number(s.trim().replace("x", "") || 1), b];
      }
      return [a, b + Number(s)];
    },
    [0, 0]
  );

  if (!x && !c) return "0";
  if (!x) return c.toString();
  x = `${x == 1 ? "" : x}x`;
  if (!c) return x;
  return `${x} + ${c}`;
}

// reduce에 배열을 넣을 생각을 못해왔음

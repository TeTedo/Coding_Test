// https://school.programmers.co.kr/learn/courses/30/lessons/12911

function solution(n) {
  const biN = n.toString(2).split("");
  let numN = 0;
  for (const val of biN) {
    numN += +val ? 1 : 0;
  }

  let i = 1;
  while (true) {
    const temp = (n + i).toString(2).split("");
    let tempNum = 0;
    for (const val of temp) {
      tempNum += +val ? 1 : 0;
    }

    if (tempNum == numN) {
      return n + i;
    }

    i++;
  }
}

// 다른사람 풀이 본 후
function solution(n, a = n + 1) {
  return n.toString(2).match(/1/g).length == a.toString(2).match(/1/g).length
    ? a
    : solution(n, a + 1);
}

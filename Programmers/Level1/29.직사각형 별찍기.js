//https://school.programmers.co.kr/learn/courses/30/lessons/12969

process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);
  let star = "";
  for (let i = 0; i < b; i++) {
    for (let j = 0; j < a; j++) {
      star += "*";
    }
    console.log(star);
    star = "";
  }
});

// 다른사람 풀이 본후
process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);
  let star = "*".repeat(a);
  for (let i = 0; i < b; i++) {
    console.log(star);
  }
});

//repeat 사용

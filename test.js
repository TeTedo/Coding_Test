function solution(maps) {
  const height = maps.length - 1;
  const width = maps[0].length - 1;
  //막힌경우 return -1
  if (
    !maps[height][width - 1] &&
    !maps[height - 1][width] &&
    !maps[height - 1][width - 1]
  )
    return -1;
  var answer = Infinity;

  function findRoad(current, prev, obj = {}, count = 1) {
    let h = current[0];
    let w = current[1];
    // maps범위 넘어가면 return
    if (+h > height || +w > width || +h < 0 || +w < 0) return;
    // 마지막이면 answer값 넣어주기
    if (+h == height && +w == width) return (answer = Math.min(answer, count));
    console.log(h, w);
    if (maps[+h][+w]) {
      // 왔던곳이면 return
      if (obj[current] && obj[current].includes(prev)) return;
      // 안온곳이면
      if (obj[current]) obj[current].push(prev);
      else obj[current] = [prev];
      if (obj[prev]) obj[prev].push(current);
      else obj[prev] = [current];
      findRoad(`${+h + 1}${+w}`, current, obj, count + 1);
      findRoad(`${+h - 1}${+w}`, current, obj, count + 1);
      findRoad(`${+h}${+w + 1}`, current, obj, count + 1);
      findRoad(`${+h}${+w - 1}`, current, obj, count + 1);
    }
  }

  findRoad("00", null);
  return answer;
}

console.log(
  "🚀 ~ file: test.js:40 ~ solution",
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1],
  ])
);

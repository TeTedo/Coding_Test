function hash(key, arrayLen) {
  let total = 0;
  for (let char of key) {
    let value = char.charCodeAt(0) - 96;
    total = (total + value) % arrayLen;
  }
  return total;
}

// 좀더 빠르게 바꾸기
function hash(key, arrayLen) {
  let total = 0;
  let WEIRD_PRIME = 31; // 소수를 이용하여 충돌을 줄인다
  // 루프를 최대 100개만 돌게해서 속도를 높였다.
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    let value = char.charCodeAt(0) - 96;
    total = (total * WEIRD_PRIME + value) % arrayLen;
  }
  return total;
}

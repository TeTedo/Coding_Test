function solution(board) {
  let boomIndex = {};
  for (let i = 0; i < board.length; i++) {
    for (let k = 0; k < board.length; k++) {
      if (board[i][k] == 1) {
        boomIndex[i - 1 + "" + (k - 1)] = 1;
        boomIndex[i - 1 + "" + k] = 1;
        boomIndex[i - 1 + "" + (k + 1)] = 1;
        boomIndex[i + "" + (k - 1)] = 1;
        boomIndex[i + "" + k] = 1;
        boomIndex[i + "" + (k + 1)] = 1;
        boomIndex[i + 1 + "" + (k - 1)] = 1;
        boomIndex[i + 1 + "" + k] = 1;
        boomIndex[i + 1 + "" + (k + 1)] = 1;
      }
    }
  }
  return board.length ** 2 - Object.keys(boomIndex).filter((v) => v[0] < board.length && v[1] < board.length).length;
}
let arr = new Array(100).fill(new Array(100).fill(0));

for (let i = 1; i <= 99; i++) {
  for (let k = 0; k < arr.length; k++) {
    arr[i][k] = 1;
  }
}
console.log(arr);
console.log(solution(arr));

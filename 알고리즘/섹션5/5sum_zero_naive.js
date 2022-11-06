//다중 포인터 문제
// 포인터를 두개로 두고 따로따로 움직이기

//예시 배열에 둘이 더해 0이 되는값이 있다면 그 두값을 return해라
function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

//시간복잡도 O(n^2)
//공간복잡도 O(1)
sumZero([-4, -3, -2, -1, 0, 1, 2, 5]);

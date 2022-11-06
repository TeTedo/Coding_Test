function collectOddValues(arr) {
  let result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }

    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }

    helper(helperInput.slice(1));
  }

  helper(arr);

  return result;
}
// helper : 함수 내부에 재귀함수를 호출하는것
collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]);

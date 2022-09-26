function addUpto(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}
console.log(addUpto(500000000));

// assignment total : 1번, i :1번 , <=n n번
// total += i 에서 +,= : n번의 연산 , ++ : =,= n번의 연산

// 5n+2개

//O(n)

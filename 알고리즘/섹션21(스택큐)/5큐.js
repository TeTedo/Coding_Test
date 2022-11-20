let q = [];
q.push("first");
q.push("second");
q.push("third");
q.shift();
q.shift();
q.shift();

q.unshift("first");
q.unshift("second");
q.unshift("third");
q.pop();
q.pop();
q.pop();

// 모두 인덱스를 새로 부여해야 하기 때문에 O(n)의 시간복잡도를 가진다.

function solution(p) {
  // 1
  if (!p) return "";
  let u = "";
  let v = "";
  let check = 0;
  // 2
  for (let i = 0; i < p.length; i++) {
    if (p[i] == "(") check++;
    else check--;

    u += p[i];
    if (!check) {
      v = p.slice(i + 1);
      break;
    }
  }
  //3
  if (checkStr(u)) {
    // 3-1
    v = solution(v);
  }
  //4
  else {
    let temp = u.slice(1, -1);
    let temp2 = "";
    for (let i = 0; i < temp.length; i++) {
      if (temp[i] == "(") temp2 += ")";
      else temp2 += "(";
    }
    u = "(" + solution(v) + ")" + temp2;
    return u;
  }
  return u + v;
}

function checkStr(str) {
  let check = 0;
  if (str[0] == ")") return false;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "(") check++;
    else check--;
    if (check < 0) return false;
  }
  return true;
}

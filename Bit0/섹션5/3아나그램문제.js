// 두개의 문자열이 주어지는데
// 두 문자열이 순서만 뒤바껴있는지 확인하는 함수

function validAnagram(str1, str2) {
  //길이가 같으면 false
  if (str1.length !== str2.length) {
    return false;
  }
  //각 객체에 키값으로 넣고 value로 갯수 파악
  const obj1 = {};
  const obj2 = {};
  for (let i = 0; i < str1.length; i++) {
    obj1[str1[i]] = ++obj1[str1[i]] || 1;
  }
  for (let i = 0; i < str2.length; i++) {
    obj2[str2[i]] = ++obj2[str2[i]] || 1;
  }
  //비교
  for (let key in obj1) {
    // 있는지 비교
    if (!(key in obj2)) {
      return false;
    }
    // 같은 갯수를 가지고 있는지 비교
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  //안걸리면 true
  return true;
}

validAnagram("", ""); // true
validAnagram("aaz", "zza"); // false
validAnagram("anagram", "nagaram"); // true
validAnagram("rat", "car"); // false) // false
validAnagram("awesome", "awesom"); // false
validAnagram("amanaplanacanalpanama", "acanalmanplanpamana"); // false
validAnagram("qwerty", "qeywrt"); // true

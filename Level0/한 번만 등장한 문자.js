// 최종 풀이
function solution(s) {
  const obj = {};
  // 배열 내 중복 값의 개수를 구함
  [...s].forEach((x) => {
    obj[x] = (obj[x] || 0) + 1;
  });
  // 개수가 1개 이상인 값들을 필터링
  return Object.entries(obj) // object내 값들을 key, value형태의 배열로 출력
    .map((a) => (a[1] === 1 ? a[0] : ""))
    .filter((a) => a !== "")
    .sort()
    .join("");
}

// 또 다른 풀이방법 01(index를 활용한 중복문자 필터링)
function solution(s) {
  let res = [];
  for (let c of s) if (s.indexOf(c) === s.lastIndexOf(c)) res.push(c);
  return res.sort().join("");
}

// 또 다른 풀이방법 02(if, while 및 shift를 이용하여 중복문자 필터링)
function solution(s) {
  let lst = s.split("").sort();
  let answer = [];
  while (lst.length) {
    let target = lst.shift(); //배열의 첫번째 요소를 제거
    if (lst[0] == target) {
      while (lst[0] == target) {
        lst.shift();
      }
    } else {
      answer.push(target);
    }
  }
  return answer.join("");
}

// 또 다른 풀이방법 03(정규표현식을 활용한 필터링)
function solution(s) {
  return [...s]
    .filter((c) => s.match(new RegExp(c, "g")).length == 1)
    .sort()
    .join("");
}

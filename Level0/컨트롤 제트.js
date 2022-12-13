// 최종 풀이
function solution(s) {
  s = s.split(" ");
  while (s.includes("Z")) {
    s.splice(s.indexOf("Z") - 1, 2);
  }
  return s.reduce((a, b) => a + +b, 0);
}

// 또 다른 풀이방법 01
function solution(s) {
  s = s.split(" ");
  let arr = [];
  // arr에 s의 요소들을 추가하며 v가 "Z"일때, arr의 제일 마지막 요소를 제거
  for (let v of s) v === "Z" ? (arr.length ? arr.pop() : "") : arr.push(v);
  return arr.reduce((a, v) => a + +v, 0);
}

// 1차 풀이
function solution(s) {
  var n = Math.ceil([...s].length / 2);
  return n % 2 != 0 ? [...s][n - 1] : [[...s][n - 1], [...s][n]].join("");
}

// 2차 풀이
function solution(s) {
  var mid = Math.ceil(s.length / 2);
  return (s.length / mid) % 2 === 0
    ? s.substr(mid - 1, mid)
    : s.substr(mid - 1, 1);
}

// 최종 풀이
function solution(s) {
  var mid = s.length / 2;
  return s.length % 2 !== 0 ? s[Math.floor(mid)] : s[mid - 1] + s[mid];
}

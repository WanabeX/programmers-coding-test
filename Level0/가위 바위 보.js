// 나의 풀이
function solution(rsp) {
  const forWin = { 2: 0, 0: 5, 5: 2 };
  return [...rsp].map((n) => forWin[n]).join("");
}

// 또 다른 풀이 방식 01(삼항연산자 활용)
function solution(rsp) {
  return rsp
    .split("")
    .map((v) => (v === "2" ? 0 : v === "0" ? 5 : 2))
    .join("");
}

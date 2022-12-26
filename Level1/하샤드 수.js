//최종 풀이
function solution(x) {
  return x %
    String(x)
      .split("")
      .reduce((a, b) => Number(a) + Number(b)) ===
    0
    ? true
    : false;
}

// 과정 축소
function solution(x) {
  return !(x % (x + "").split("").reduce((a, b) => +b + +a));
}

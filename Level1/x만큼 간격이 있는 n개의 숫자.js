// 최종 풀이
function solution(x, n) {
  return Array.from({ length: n }, (_, i) => (i + 1) * x);
}

// 또 다른 풀이방법 01
Array(n)
  .fill(x)
  .map((v, i) => (i + 1) * v);

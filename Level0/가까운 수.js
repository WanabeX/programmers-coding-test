// 1차 풀이
function solution(array, n) {
  const near = Math.min(...array.map((i) => Math.abs(i - n)));
  return array.filter((i) => Math.abs(i - n) === near).sort((a, b) => a - b)[0];
}

// 최종 풀이(코드 간소화)
function solution(array, n) {
  return array
    .filter(
      (i) => Math.abs(i - n) === Math.min(...array.map((i) => Math.abs(i - n)))
    )
    .sort((a, b) => a - b)[0];
}

// 또 다른 풀이방법 01 (sort응용하여 좌표처럼 사용)
function solution(array, n) {
  return array
    .map((i) => [i, Math.abs(i - n)])
    .sort((a, b) => a[1] - b[1] || a[0] - b[0])[0][0];
}

// 또 다른 풀이방법 02 (reduce 와 삼항연산자 활용)
function solution(array, n) {
  return array.reduce((a, c) =>
    Math.abs(a - n) < Math.abs(c - n)
      ? a
      : Math.abs(a - n) === Math.abs(c - n)
      ? Math.min(a, c)
      : c
  );
}

// 최종 풀이
function solution(n) {
  for (let i = 0; i < n; i++) {
    n % i;
    if (n % i === 1) {
      return i;
    }
  }
}

// 또 다른 풀이방식01 (while 활용)
function solution(n, x = 1) {
  while (x++) {
    if (n % x === 1) {
      return x;
    }
  }
}

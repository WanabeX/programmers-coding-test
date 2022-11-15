// 나의 풀이
function solution(n) {
  var answer = 0;
  for (let i = 1; i <= n; i++) {
    if (n % i == 0) {
      answer += 1;
    }
  }
  return answer;
}

// 또 다른 풀이방식 01(Math.sqrt, isInteger활용)
function solution(n) {
  let ans = 0;
  for (let i = 1; i < Math.sqrt(n); i++) if (n % i === 0) ans += 2;

  return Number.isInteger(Math.sqrt(n)) ? ans + 1 : ans;
}

// 또 다른 풀이방식 02(map, filter활용)
function solution(n) {
  return Array(n)
    .fill(1)
    .map((v, idx) => v + idx)
    .filter((v) => n % v === 0).length;
}

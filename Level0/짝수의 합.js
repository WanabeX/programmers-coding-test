// 나의 풀이
function solution(n) {
  var answer = 0;
  for (let i = 1; i <= n; i++) {
    if (i % 2 === 0) answer += i;
  }
  return answer;
}

// 또 다른 풀이방식 01(Math.floor 사용)
function solution(n) {
  var half = Math.floor(n / 2);
  return half * (half + 1);
}

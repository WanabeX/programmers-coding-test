// 1차 풀이(테스트1,5 불통 7의 배수 등에 대비하지 못함)
function solution(n) {
  var answer = 0;
  if (n <= 3) return answer;
  for (let i = 4; i <= n; i++) {
    if (i % 2 === 0 || i % 3 === 0) answer++;
  }
  return answer;
}

// 최종 풀이
function solution(n) {
  let arr = new Set();
  for (let i = 1; i <= n; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) arr.add(i);
    }
  }
  return arr.size;
}

// 또 다른 풀이방식 01(for의 또 다른 활용방법)
function solution(n) {
  let dp = new Array(n + 1).fill(1);
  for (let i = 2; i <= n; i++) {
    if (dp[i]) {
      for (let j = 2; i * j <= n; j++) {
        dp[i * j] = 0;
      }
    }
  }
  return dp.filter((el) => el === 0).length;
}

// 또 다른 풀이방식 02(합성수의 반대개념인 소수를 구하여 풀이)
function solution(n) {
  let base = Array.from(Array(n), (v, i) => i + 1);
  for (let i = 2; i <= parseInt(Math.sqrt(n)); i++) {
    base = base.filter((el) => el % 2 != 0 || el <= i);
  }
  return n - base.length;
}

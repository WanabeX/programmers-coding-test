// 나의 풀이
function solution(n) {
  var answer = [];
  for (let i = 1; i <= n; i++) {
    if (n % i === 0) answer.push(i);
  }
  return answer.sort((a, b) => a - b);
}

// 또 다른 문제 풀이 01(제곱근 이용)
function solution(n) {
  const answer = [];
  for (let i = 1; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      answer.push(i);
      if (n / i != i) answer.push(n / i);
    }
  }
  return answer.sort((a, b) => a - b);
}

// 또 다른 문제 풀이 01(1부터 n까지의 값을 가진 배열내에서 약수에 해당하는 수만 걸러냄)
function solution(n) {
  return Array.from({ length: n }, (_, i) => i + 1).filter(
    (el) => n % el === 0
  );
}

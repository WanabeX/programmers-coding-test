// 나의 풀이
function solution(n) {
  var answer = [];
  for (let i = 0; i <= n; i++) {
    if (i % 2 == 1) answer = [...answer, i];
  }
  return answer;
}

// 또 다른 풀이방식 01(간소화 된 for 활용법)
function solution(n) {
  var answer = [];
  for (let i = 1; i <= n; i += 2) answer.push(i);
  return answer;
}

// 또 다른 풀이방식 02(Array.from 사용)
const solution = (n) =>
  Array.from({ length: n }, (_, i) => i + 1).filter((i) => i % 2 !== 0);

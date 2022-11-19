// 나의 풀이
function solution(n, t) {
  var answer = 0;
  for (let i = 0; i < t; i++) {
    answer = n *= 2;
  }
  return answer;
}

// 또 다른 풀이 방식 01 (while, 감소 연산자 활용)
function solution(n, t) {
  while (t-- > 0) n *= 2;
  return n;
}

// 또 다른 풀이 방식 02 (Math.pow()활용)
function solution(n, t) {
  return n * Math.pow(2, t);
}

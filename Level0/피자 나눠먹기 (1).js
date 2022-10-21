// 나의 풀이
function solution(n) {
  var answer = Math.ceil(n / 7);
  return answer;
}

// 또 다른 풀이방식 01
function solution(n) {
  var answer = Math.floor((n - 1) / 7) + 1;
  return answer;
}

// 또 다른 풀이방식 02
function solution(n) {
  var answer = n % 7 === 0 ? Math.floor(n / 7) : Math.floor(n / 7) + 1;
  return answer;
}

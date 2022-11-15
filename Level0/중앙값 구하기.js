// 나의 풀이
function solution(array) {
  var answer = array.sort((a, b) => a - b);
  var n = Math.floor(answer.length / 2);
  return answer[n];
}

// 또 다른 풀이방식 01(좀 더 간소화 된 방법)
function solution(array) {
  return array.sort((a, b) => a - b)[Math.floor(array.length / 2)];
}

// 최종 풀이
function solution(a, b) {
  return a.map((x, y) => x * b[y]).reduce((a, b) => a + b);
}

// 또 다른 풀이방법 01
function solution(a, b) {
  return a.reduce((acc, _, i) => (acc += a[i] * b[i]), 0);
}

// 또 다른 풀이방법 02
function solution(a, b) {
  var sum = 0;
  for (var i = 0; i < a.length; i++) {
    sum += a[i] * b[i];
  }
  return sum;
}

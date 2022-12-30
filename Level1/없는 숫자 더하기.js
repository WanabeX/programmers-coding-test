// 최종 풀이
function solution(numbers) {
  var arr = Array.from({ length: 10 }, (v, i) => i);
  return arr.filter((e) => !numbers.includes(e)).reduce((a, b) => a + b);
}

// 또 다른 풀이방법 01
function solution(numbers) {
  return 45 - numbers.reduce((cur, acc) => cur + acc, 0);
}

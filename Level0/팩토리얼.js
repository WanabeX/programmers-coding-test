// 나의 풀이
function solution(n) {
  var count = 1;
  for (let i = 1; i <= n; i++) {
    count *= i;
    if (count == n) {
      return i;
    } else if (count > n) {
      return i - 1;
    }
  }
}

// 또 다른 풀이방법 01(while문 활용)
function solution(n) {
  let i = 1;
  let f = 1;
  while (f * i < n) f *= ++i;
  return i;
}

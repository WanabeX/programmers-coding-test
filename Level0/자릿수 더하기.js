// 나의 풀이
function solution(n) {
  var arr = n
    .toString()
    .split("")
    .map((x) => parseInt(x));
  var answer = arr.reduce((a, b) => a + b, 0);
  return answer;
}

// 또 다른 풀이방식 01(좀 더 간략화 된 풀이)
function solution(n) {
  return n
    .toString()
    .split("")
    .reduce((acc, cur) => acc + Number(cur), 0);
}

// 또 다른 풀이방식 02(while 사용)
function solution(n) {
  let result = 0;

  while (n > 0) {
    result += n % 10;

    n = Math.floor(n / 10);
  }

  return result;
}

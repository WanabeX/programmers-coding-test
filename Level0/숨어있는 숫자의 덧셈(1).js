// 나의 풀이
function solution(my_string) {
  var answer = my_string
    .replace(/[^0-9]/g, "")
    .split("")
    .map((i) => Number(i));
  return answer.reduce((a, b) => a + b);
}

// 또 다른 풀이방식(match, 단항 더하기 활용)
function solution(my_string) {
  return my_string.match(/[0-9]/g).reduce((a, c) => a + +c, 0);
}

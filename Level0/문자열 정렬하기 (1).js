// 나의 풀이
function solution(my_string) {
  var answer = Array.from(my_string.replace(/[^0-9]/g, "")).map((x) =>
    parseInt(x)
  );
  return answer.sort((a, b) => a - b);
}

// 또 다른 풀이방식(/\d/g, Number(); 활용)
function solution(my_string) {
  return my_string
    .match(/\d/g)
    .sort((a, b) => a - b)
    .map((n) => Number(n));
}

// 또 다른 풀이방식(isNaN 활용)
function solution(my_string) {
  return my_string
    .split("")
    .filter((v) => !isNaN(v))
    .map((v) => v * 1)
    .sort((a, b) => a - b);
}

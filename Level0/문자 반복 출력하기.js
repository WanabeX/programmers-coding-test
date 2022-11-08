// 나의 풀이
function solution(my_string, n) {
  var answer = [...my_string].map((element) => element.repeat(n)).join("");
  return answer;
}

// 또 다른 풀이방식01(split 활용)
function solution(my_string, n) {
  var answer = my_string
    .split("")
    .map((element) => element.repeat(n))
    .join("");
  return answer;
}

// 또 다른 풀이방식02(reduce 활용)
function solution(my_string, n) {
  return my_string.split("").reduce((acc, cur) => acc + cur.repeat(n), "");
}

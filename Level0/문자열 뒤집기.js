// 나의 풀이
function solution(my_string) {
  var answer = my_string.split("").reverse().join("");
  return answer;
}

// 또 다른 풀이방식 01([...]사용)
function solution(my_string) {
  var answer = [...my_string].reverse().join("");
  return answer;
}

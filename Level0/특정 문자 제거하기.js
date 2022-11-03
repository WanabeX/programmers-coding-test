// 나의 풀이
function solution(my_string, letter) {
  var answer = my_string;
  answer = answer.replaceAll(letter, "");
  return answer;
}

// 또 다른 풀이방식 01(split 사용)
function solution(my_string, letter) {
  const answer = my_string.split(letter).join("");
  return answer;
}

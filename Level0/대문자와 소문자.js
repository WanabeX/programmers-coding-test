// 나의 풀이
function solution(my_string) {
  var answer = "";
  for (let word of my_string) {
    if (word == word.toUpperCase()) {
      answer += word.toLowerCase();
    } else {
      answer += word.toUpperCase();
    }
  }
  return answer;
}

// 또 다른 풀이방식 01(for of와 삼항연산자 활용)
function solution(my_string) {
  var answer = "";
  for (let c of my_string)
    answer += c === c.toLowerCase() ? c.toUpperCase() : c.toLowerCase();
  return answer;
}

// 또 다른 풀이방식 02(map 활용)
function solution(my_string) {
  return my_string
    .split("")
    .map((n) => (n === n.toUpperCase() ? n.toLowerCase() : n.toUpperCase()))
    .join("");
}

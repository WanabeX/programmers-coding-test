//나의 풀이
function solution(my_string) {
  var vowel = ["a", "e", "i", "o", "u"];
  var answer = my_string
    .split("")
    .filter((e) => !vowel.includes(e))
    .join("");
  return answer;
}

// 또 다른 풀이방법 01(좀 더 간소화된 방법)
function solution(my_string) {
  return Array.from(my_string)
    .filter((t) => !["a", "e", "i", "o", "u"].includes(t))
    .join("");
}

// 또 다른 풀이방법 02(replace, 정규표현식 사용)
function solution(my_string) {
  return my_string.replace(/[aeiou]/g, "");
}

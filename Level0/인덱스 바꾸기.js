// 나의 풀이
function solution(my_string, num1, num2) {
  var answer = [...my_string];
  answer.splice(num1, 1, [...my_string][num2]);
  answer.splice(num2, 1, [...my_string][num1]);
  return answer.join("");
}

// 또 다른 풀이방법 01(구조분해 할당 응용)
function solution(my_string, num1, num2) {
  my_string = my_string.split("");
  [my_string[num1], my_string[num2]] = [my_string[num2], my_string[num1]];
  return my_string.join("");
}

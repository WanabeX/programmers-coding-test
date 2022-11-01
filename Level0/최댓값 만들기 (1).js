// 나의 풀이
function solution(numbers) {
  var sortArray = numbers.sort((a, b) => b - a);
  var answer = sortArray[0] * sortArray[1];
  return answer;
}

// 또 다른 풀이방식 01(좀 더 간략한 방법)
function solution(numbers) {
  numbers.sort((a, b) => b - a);
  return numbers[0] * numbers[1];
}

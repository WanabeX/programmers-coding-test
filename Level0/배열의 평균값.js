// 나의 풀이
function solution(numbers) {
  var answer = numbers.reduce((a, b) => a + b, 0) / numbers.length;
  return answer;
}

// 또 다른 풀이방식 01(for문 사용)
function solution(numbers) {
  var answer = 0;
  for (i of numbers) {
    answer += i;
  }
  return answer / numbers.length;
}

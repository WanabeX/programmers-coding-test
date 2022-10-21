// 나의 풀이 01(slice 사용)
function solution(numbers, num1, num2) {
  var answer = numbers.slice(num1, num2 + 1);
  return answer;
}

// 나의 풀이 02(splice사용)
function solution(numbers, num1, num2) {
  var answer = numbers.splice(num1, num2 - num1 + 1);
  return answer;
}

// 또 다른 풀이방식 01(for문 사용)
function solution(numbers, num1, num2) {
  var answer = [];
  for (let i = num1; i < num2 + 1; i++) {
    answer.push(numbers[i]);
  }
  return answer;
}

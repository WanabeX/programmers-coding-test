// 나의 풀이
function solution(numbers) {
  var answer = numbers.map((x) => {
    return x * 2;
  });
  return answer;
}

// 또 다른 풀이방식 01(reduce 사용)
function solution(numbers) {
  return numbers.reduce((a, b) => [...a, b * 2], []);
}

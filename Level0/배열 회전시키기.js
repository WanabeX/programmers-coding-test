// 나의 풀이
function solution(numbers, direction) {
  if (direction == "right") {
    numbers.splice(0, 0, numbers.pop());
  } else {
    numbers.splice(numbers.length, 0, numbers.shift());
  }
  return numbers;
}

// 또 다른 풀이방식 01 (비구조화 할당 활용)
function solution(numbers, direction) {
  return direction === "right"
    ? [numbers[numbers.length - 1], ...numbers.slice(0, numbers.length - 1)]
    : [...numbers.slice(1), numbers[0]];
}

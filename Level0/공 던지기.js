// 최종 풀이
function solution(numbers, k) {
  let i = 0;
  for (let j = 1; j < k; j++) {
    i += 2;
    if (i > numbers.length) {
      i %= numbers.length;
    }
  }
  return numbers[i];
}

// 또 다른 풀이방법 01 (인덱스를 바로 산출)
function solution(numbers, k) {
  return numbers[(--k * 2) % numbers.length];
}

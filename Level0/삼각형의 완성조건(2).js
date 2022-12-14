// 최종 풀이
function solution(sides) {
  return sides.sort((a, b) => a - b)[0] * 2 - 1;
}

// 또 다른 풀이방식 01
function solution(sides) {
  return Math.min(...sides) * 2 - 1;
}

// 또 다른 풀이방식 02
function solution(sides) {
  let count = 0;
  const max = Math.max(...sides);
  const min = Math.min(...sides);
  // 만약 기존 요소 중 가장 긴 변이 있다면
  for (let i = max - min + 1; i <= max; i++) {
    count++;
  }
  // 나머지 한 변이 가장 긴 변인 경우
  for (let i = max + 1; i < max + min; i++) {
    count++;
  }
  return count;
}

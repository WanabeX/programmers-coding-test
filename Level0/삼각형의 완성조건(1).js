// 나의 풀이
function solution(sides) {
  var [a, b, ...side] = sides.sort((a, b) => {
    return a - b;
  });
  return a + b > side ? 1 : 2;
}

// 또 다른 풀이방식01(Math.max 사용)
function solution(sides) {
  const max = Math.max(...sides);
  return max < sides.reduce((a, c) => a + c, 0) - max ? 1 : 2;
}

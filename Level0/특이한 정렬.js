// 최종 풀이
function solution(numlist, n) {
  return numlist.sort((a, b) => Math.abs(a - n) - Math.abs(b - n) || b - a);
}

// 또 다른 풀이방법 01
function solution(numlist, n) {
  return numlist.sort((a, b) => {
    const [aDiff, bDiff] = [Math.abs(a - n), Math.abs(b - n)];
    if (aDiff === bDiff) return b - a;
    return aDiff - bDiff;
  });
}

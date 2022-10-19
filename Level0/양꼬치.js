function solution(n, k) {
  if (0 < n && n < 1000 && 0 <= k && k < 1000) {
    var answer = n * 12000 + (k - Math.floor(n / 10)) * 2000;
  }
  return answer;
}

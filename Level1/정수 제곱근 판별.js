function solution(n) {
  var sqrt = Math.ceil(Math.sqrt(n)); //sqrt함수를 사용하면 소수점 8째 자리까지만 반환하므로 정확한 비교를 위해 Math.ceil사용
  return sqrt == n / sqrt ? Math.pow(sqrt + 1, 2) : -1;
}

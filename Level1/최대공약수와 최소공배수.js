// 최종 풀이
function solution(n, m) {
  const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));
  const lcm = (a, b) => (a * b) / gcd(a, b);
  return [gcd(n, m), lcm(n, m)];
}

// 또 다른 풀이방법 01
function solution(n, m) {
  var r;
  for (var nm = n * m; (r = n % m); n = m, m = r) {}
  return [m, nm / m];
}

// 또 다른 풀이방법 02
function greatestCommonDivisor(a, b) {
  return b ? greatestCommonDivisor(b, a % b) : Math.abs(a);
}
function leastCommonMultipleOfTwo(a, b) {
  return (a * b) / greatestCommonDivisor(a, b);
}
function gcdlcm(a, b) {
  return [greatestCommonDivisor(a, b), leastCommonMultipleOfTwo(a, b)];
}

// 또 다른 풀이방법 03
function gcdlcm(a, b) {
  var gcd = calc_gcd(a, b);
  var lcm = (a * b) / gcd;

  return [gcd, lcm];
}

function calc_gcd(a, b) {
  if (b == 0) return a;
  return a > b ? calc_gcd(b, a % b) : calc_gcd(a, b % a);
}

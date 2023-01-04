// 최종 풀이
function solution(n) {
  return parseInt([...n.toString(3)].reverse().join(""), 3);
}

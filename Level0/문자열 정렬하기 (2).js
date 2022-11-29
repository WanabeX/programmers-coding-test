// 나의 풀이
function solution(my_string) {
  return [...my_string]
    .map((e) => e.toLowerCase())
    .sort()
    .join("");
}

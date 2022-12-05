// 나의 풀이방식
function solution(array) {
  return array
    .join("")
    .split("")
    .filter((e) => "7" === e).length;
}

// 또 다른 풀이방식 01(split의 separator로 7을 활용)
function solution(array) {
  return array.join("").split("7").length - 1;
}

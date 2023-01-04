// 1차 풀이(테스트 1,2,6 제외 불통. 문자열이 아닌 단어별로 대소문자 변경 해야함)
function solution(s) {
  return [...s]
    .map((e, i) => (i % 2 === 0 ? e.toUpperCase() : e.toLowerCase()))
    .join("");
}

// 최종 풀이
function solution(s) {
  return s
    .split(" ")
    .map((e) =>
      e
        .split("")
        .map((_, i) => (i % 2 === 0 ? e[i].toUpperCase() : e[i].toLowerCase()))
        .join("")
    )
    .join(" ");
}

// 또 다른 풀이방법 01 (정규표현식 활용)
function solution(s) {
  return s.toUpperCase().replace(/(\w)(\w)/g, function (a) {
    return a[0].toUpperCase() + a[1].toLowerCase();
  });
}

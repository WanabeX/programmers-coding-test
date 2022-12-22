// 1차 풀이(테스트21 불통. n이 한자리수일 경우에 대비하지 못함)
function solution(n) {
  return String(n)
    .split("")
    .reduce((a, b) => Number(a) + Number(b));
}

// 최종 풀이
function solution(n) {
  return n < 10
    ? n
    : String(n)
        .split("")
        .reduce((a, b) => Number(a) + Number(b));
}

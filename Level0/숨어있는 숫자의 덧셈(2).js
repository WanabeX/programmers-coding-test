// 1차 풀이(테스트8 런타임 에러로 불통 자연수가 없을 경우에 대비하지 못함)
function solution(my_string) {
  return my_string
    .match(/\d+/g) // 하나 또는 그 이상의 숫자를 모두 찾음
    .map((i) => Number(i))
    .reduce((a, b) => a + b);
}

// 최종 풀이
function solution(my_string) {
  return (my_string.match(/\d+/g) || [0]) // 하나 또는 그 이상의 숫자를 모두 찾거나 자연수가 없을 경우 0을 return
    .map((i) => Number(i))
    .reduce((a, b) => a + b);
}

// 또 다른 풀이방법 01(정규표현식 활용, 좀 더 간소화된 방법)
function solution(my_string) {
  return (my_string.match(/\d+/g) || [0]).reduce((a, b) => a * 1 + b * 1, 0);
}

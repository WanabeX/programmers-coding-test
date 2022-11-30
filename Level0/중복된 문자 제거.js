// 1차 풀이(이 코드도 통과 가능하지만 좀 더 간소화 된 방법을 이용하기 위해 보류함)
function solution(my_string) {
  var arr = [...my_string];
  var answer = new Set(arr);
  var result = [...answer];
  return result.join("");
}

// 최중 풀이(indexOf를 이용하여 중복되는 문자 추출 후 filter로 제거)
function solution(my_string) {
  return [...my_string]
    .filter((e, i) => [...my_string].indexOf(e) === i)
    .join("");
}

// 또 다른 풀이방법 01(초 간단 풀이)
function solution(my_string) {
  return [...new Set(my_string)].join("");
}

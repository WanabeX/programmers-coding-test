// 1차 풀이(repeat 활용 - 통과된 풀이)
function solution(phone_number) {
  return "*".repeat(phone_number.length - 4) + phone_number.slice(-4);
}

// 최종 풀이(padStart 활용)
function solution(phone_number) {
  var lastPn = phone_number.slice(-4);
  return lastPn.padStart(phone_number.length, "*");
}

// 또 다른 풀이방법 01 (정규표현식 활용)
function solution(phone_number) {
  return phone_number.replace(/\d(?=\d{4})/g, "*");
}

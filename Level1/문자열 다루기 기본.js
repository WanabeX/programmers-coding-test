// 1차 풀이(5,6,28,29 불통 문자열 길이 고려하지 않음)
function solution(s) {
  var noEng = /[a-z|A-Z]/;
  return !noEng.test(s);
}

// 최종 풀이
function solution(s) {
  var noEng = /[a-z|A-Z]/;
  return s.length == 4 || s.length == 6 ? !noEng.test(s) : false;
}

// 또 다른 풀이방법 01 (정규표현식을 이용해 수의 길이를 파악하여 풀어냄)
function solution(s) {
  var regex = /^\d{6}$|^\d{4}$/;
  return regex.test(s);
}

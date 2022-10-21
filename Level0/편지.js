// 나의 문제풀이(for사용 연습)
function solution(message) {
  var answer = 0;
  for (let letter = 0; letter < message.length; letter++) {
    answer++;
  }
  return answer * 2;
}

// 또 다른 풀이방식 01(초 심플)
function solution(message) {
  return message.length * 2;
}

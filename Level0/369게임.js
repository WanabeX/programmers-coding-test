// 1차 풀이(테스트3 불통)
function solution(order) {
  var answer = 0;
  for (let i = 0; i <= [...(order + "")].length - 1; i++) {
    if ([...(order + "")][i] % 3 === 0) {
      answer++;
    }
  }
  return answer;
}

// 최종 풀이(if조건식에 order에 0이 포함되어있을 경우를 고려하지 않았고, 이를 보완하여 통과)
function solution(order) {
  var answer = 0;
  order = [...(order + "")];
  for (let i = 0; i <= order.length - 1; i++) {
    if (order[i] != 0 && order[i] % 3 === 0) {
      answer++;
    }
  }
  return answer;
}

// 또 다른 풀이방법 01(구조분해 나머지 패턴과 toString,정규표현식을 이용한 mathAll을 함께 사용)
function solution(order) {
  var answer = [...order.toString().matchAll(/[3|6|9]/g)].length;
  return answer;
}

// 또 다른 풀이방법 02(split separator로 정규표현식 사용)
function solution(order) {
  return ("" + order).split(/[369]/).length - 1;
}

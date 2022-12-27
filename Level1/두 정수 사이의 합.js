//1차 풀이(7,9,15,16 테스트 불통)
function solution(a, b) {
  var [numA, numB] = [a, b].sort();
  var answer = 0;
  if (numA === numB) {
    return numA;
  } else {
    for (let i = numA; i <= numB; i++) {
      answer += i;
    }
  }
  return answer;
}

//최종 풀이(음수일 경우에 대비해 sort를 재정비하여 통과)
function solution(a, b) {
  var [numA, numB] = [a, b].sort((a, b) => a - b);
  var answer = 0;
  if (numA === numB) {
    return numA;
  } else {
    for (let i = numA; i <= numB; i++) {
      answer += i;
    }
  }
  return answer;
}

// 또 다른 풀이방법 01
function solution(a, b) {
  return ((a + b) * (Math.abs(b - a) + 1)) / 2;
}

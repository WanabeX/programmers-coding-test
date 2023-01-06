// 1차 풀이(통과한 풀이)
function solution(left, right) {
  var divArr = [];
  var answer = 0;
  var i = left;
  // left부터 right까지 수의 약수를 구한 뒤, 짝, 홀수 여부에 따라 더하기 또는 빼기 진행
  while (i <= right) {
    for (let j = 0; j <= i; j++) {
      if (i % j == 0) divArr.push(j);
    }

    if (divArr.length % 2 == 0) {
      answer += i;
      divArr = [];
      i++;
    } else {
      answer -= i;
      divArr = [];
      i++;
    }
  }
  return answer;
}

// 최종 풀이(따로 배열로 만들지 않고 count를 통해 약수의 개수를 체크)
function solution(left, right) {
  var answer = 0;

  for (let i = left; i <= right; i++) {
    let count = 0;
    for (let j = 1; j <= i; j++) {
      if (i % j === 0) count++;
    }
    if (count % 2 == 0) answer += i;
    else answer -= i;
  }
  return answer;
}

// 또 다른 풀이방법 01 (제곱근이 정수일 경우 약수의 개수가 홀수라는 점을 이용)
function solution(left, right) {
  var answer = 0;
  for (let i = left; i <= right; i++) {
    if (Number.isInteger(Math.sqrt(i))) {
      answer -= i;
    } else {
      answer += i;
    }
  }
  return answer;
}

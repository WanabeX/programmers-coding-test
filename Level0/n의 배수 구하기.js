// 나의 풀이
function solution(n, numlist) {
  var answer = [];
  for (let i = 0; i < numlist.length; i++) {
    if (numlist[i] % n == 0) {
      answer.push(numlist[i]);
    }
  }
  return answer;
}

// 또 다른 풀이 방식01 (filter를 이용한 간소화된 방식)
function solution(n, numlist) {
  return numlist.filter((num) => num % n === 0);
}

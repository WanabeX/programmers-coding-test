// 나의 풀이
function solution(money) {
  var answer = [];
  var quot = parseInt(money / 5500);
  var remain = parseInt(money % 5500);
  return (answer = [quot, remain]);
}

// 또 다른 풀이방식 01(floor 사용)
function solution(money) {
  return [Math.floor(money / 5500), money % 5500];
}

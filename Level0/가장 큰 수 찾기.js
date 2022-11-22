// 나의 풀이
function solution(array) {
  var maxNum = Math.max.apply(null, array);
  return [maxNum, array.indexOf(maxNum)];
}

// 또 다른 풀이방식 01
function solution(array) {
  let max = Math.max(...array);
  return [max, array.indexOf(max)];
}

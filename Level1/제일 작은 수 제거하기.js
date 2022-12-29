// 최종 풀이
function solution(arr) {
  var removeMinArr = arr.filter((e) => e != Math.min(...arr));
  return arr.length <= 1 ? [-1] : removeMinArr;
}

// 최종 풀이
function solution(arr1, arr2) {
  let result = [];
  for (let i = 0; i < arr1.length; i++) {
    result.push(arr1[i].map((_, y) => arr1[i][y] + arr2[i][y]));
  }
  return result;
}

// 또 다른 풀이방법 01(위 과정 간결화)
function solution(arr1, arr2) {
  return arr1.map((a, i) => a.map((b, j) => b + arr2[i][j]));
}

//나의 풀이
function solution(array, height) {
  var answer = array.filter((taller) => taller > height);
  return answer.length;
}

// 또 다른 풀이방식 01(for in 활용)
function solution(array, height) {
  var answer = 0;
  for (var i in array) {
    var h = array[i];
    if (height < h) {
      answer++;
    }
  }
  return answer;
}

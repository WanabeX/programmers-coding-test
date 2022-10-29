// 나의 풀이
function solution(num_list) {
  var answer = num_list.reverse();
  return answer;
}

// 또 다른 풀이방식 01(for 사용)
function solution(num_list) {
  var answer = [];
  var j = num_list.length;
  for (var i = 1; i <= j; i++) {
    answer.push(num_list[j - i]);
  }
  return answer;
}

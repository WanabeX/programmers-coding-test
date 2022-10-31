// 나의 풀이
function solution(strlist) {
  var answer = strlist.map((x) => x.length);
  return answer;
}

// 또 다른 풀이방식 01(for문 사용)
function solution(strlist) {
  var answer = [];
  for (let i = 0; i < strlist.length; i++) {
    answer.push(strlist[i].length);
  }
  return answer;
}

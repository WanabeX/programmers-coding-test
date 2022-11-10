// 나의 풀이
function solution(s1, s2) {
  var answer = s1.filter((x) => s2.includes(x));
  return answer.length;
}

// 또 다른 풀이방법01(for사용)
function solution(s1, s2) {
  var answer = 0;
  for (var i = 0; i < s1.length; i++) {
    for (var j = 0; j < s2.length; j++) {
      if (s1[i] === s2[j]) answer++;
    }
  }
  return answer;
}

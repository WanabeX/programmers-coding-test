// 최종 풀이
function solution(arr) {
  return arr.filter((e, i) => e !== arr[i + 1]);
}

// 또 다른 풀이방법 01
function solution(arr) {
  var answer = [arr[0]];

  for (let i = 1; i < arr.length; i++) {
    if (answer[answer.length - 1] !== arr[i]) {
      answer.push(arr[i]);
    }
  }

  return answer;
}

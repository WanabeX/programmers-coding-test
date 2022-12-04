// 나의 풀이
function solution(num_list, n) {
  var answer = [];

  for (let i = 0; i < num_list.length; i = i + n) {
    answer.push(num_list.slice(i, i + n));
  }

  return answer;
}

// 또 다른 풀이방법 01(for의 또 다른 활용)
function solution(num_list, n) {
  let result = [];

  for (let i = 0; i < num_list.length / n; i++) {
    result = [...result, num_list.slice(i * n, i * n + n)];
  }

  return result;
}

// 또 다른 풀이방법 02(while 활용)
function solution(num_list, n) {
  var answer = [];

  while (num_list.length) {
    answer.push(num_list.splice(0, n));
  }

  return answer;
}

// 나의 풀이
function solution(num_list) {
  var answer = [];
  var EvenNum = 0;
  var oddNum = 0;
  for (var i = 0; i < num_list.length; i++) {
    if (num_list[i] % 2 == 0) {
      EvenNum++;
    } else {
      oddNum++;
    }
  }
  return (answer = [EvenNum, oddNum]);
}

// 또 다른 풀이방식 01(for of 활용으로 코드 간소화)
function solution(num_list) {
  var answer = [0, 0];

  for (let a of num_list) {
    answer[a % 2] += 1;
  }

  return answer;
}

// 또 다른 풀이방식 02(filter 활용)
function solution(num_list) {
  return [
    num_list.filter((num) => num % 2 === 0).length,
    num_list.filter((num) => num % 2 === 1).length,
  ];
}

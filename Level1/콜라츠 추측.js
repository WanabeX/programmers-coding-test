// 최종 풀이
function solution(num) {
  let count = 0;

  while (num > 1) {
    if (count == 500) return -1;
    count++;

    if (num % 2 == 0) num /= 2;
    else {
      num *= 3;
      num++;
    }
  }

  return count;
}

// 또 다른 풀이방법 01
function solution(num) {
  var answer = 0;
  while (num != 1 && answer != 500) {
    num % 2 == 0 ? (num = num / 2) : (num = num * 3 + 1);
    answer++;
  }
  return num == 1 ? answer : -1;
}

// 또 다른 풀이방법 02
function solution(num, count = 0) {
  return num == 1
    ? count >= 500
      ? -1
      : count
    : solution(num % 2 == 0 ? num / 2 : num * 3 + 1, ++count);
}

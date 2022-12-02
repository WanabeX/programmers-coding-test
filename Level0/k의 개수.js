// 나의 풀이
function solution(i, j, k) {
  var answer = [];
  for (let n = i; n <= j; n++) {
    answer.push(n);
  }
  var result = answer.join("");
  return [...result].filter((e) => k == e).length;
}

// 또 다른 풀이방법 01(for와 split활용)
function solution(i, j, k) {
  let a = "";
  for (i; i <= j; i++) {
    a += i;
  }

  return a.split(k).length - 1;
}

// 또 다른 풀이방법 02(풀이방법 01의 변형)
function solution(i, j, k) {
  var answer = 0;

  for (; i <= j; i++) {
    const x = i.toString().split(k).length - 1;
    answer += x;
  }

  return answer;
}

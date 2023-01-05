// 1차 풀이
function solution(d, budget) {
  var count = 0;
  var sortArr = d.sort((a, b) => a - b);
  var sumArr = d.reduce((a, b) => a + b);

  if (sumArr == budget) return d.length;

  for (let i = 0; i < d.length; i++) {
    count++;
    budget -= sortArr[i];
    if (budget < 0) {
      break;
    }
  }
  return budget < 0 ? count - 1 : count;
}

// 최종 풀이
function solution(d, budget) {
  var count = 0;
  var sumD = 0;
  var sortArr = d.sort((a, b) => a - b);

  for (let i = 0; i < d.length; i++) {
    if (budget < sumD + d[i]) {
      break;
    }
    sumD += sortArr[i];
    count++;
  }
  return count;
}

// 또 다른 풀이방법 01
function solution(d, budget) {
  return ~(
    ~d
      .sort((a, b) => a - b)
      .map((v) => (budget -= v))
      .findIndex((v) => v < 0) || ~d.length
  );
}

// 또 다른 풀이방법 02
function solution(d, budget) {
  var answer = 0;

  // d 배열에서 값이 작은 놈부터 빼서 answer에 +1
  d.sort((a, b) => a - b);
  var sum = 0;
  for (var i = 0; i < d.length; i++) {
    if (budget < sum + d[i]) break;
    sum += d[i];
    answer++;
  }

  return answer;
}

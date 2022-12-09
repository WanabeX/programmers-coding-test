// 최종 풀이
function solution(n) {
  var answer = [];
  for (let i = 2; i <= Math.sqrt(n); i++) {
    while (n % i === 0) {
      answer.push(i);
      n /= i;
    }
  }
  if (n >= 2) {
    answer.push(n);
  }
  return [...new Set(answer)];
}

// 또 다른 풀이방법 01
function solution(n) {
  let result = [];
  let divisor = 2;

  while (n >= 2) {
    if (n % divisor === 0) {
      result.push(divisor);
      n = n / divisor;
    } else divisor++;
  }

  return [...new Set(result)];
}

// 또 다른 풀이방법 02
function solution(n) {
  let prime = [];

  for (let i = 2; i <= Math.sqrt(n); i++) {
    while (n % i === 0) {
      prime.push(i);
      n /= i;
    }
  }

  if (n >= 2) {
    prime.push(n);
  }

  let ans = Array.from(new Set(prime));
  return ans.sort((a, b) => a - b);
}

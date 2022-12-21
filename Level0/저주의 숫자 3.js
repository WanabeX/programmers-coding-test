// 1차 풀이(제한사항에 n 값이 100 미만이라고 하였는데 테스트코드에는 100 이상의 숫자도 있어 불통)
function solution(n) {
  const arrN =
    Array.from({ length: 100 }, (v, i) => String(i + 1)).filter(
      (a) => a % 3 != 0 && !a.includes("3")
    )[n] - 1;
  return arrN;
}

// 최종 풀이
function solution(n) {
  let count = 0;
  let num = 0;

  while (count < n) {
    num++;
    // num의 값이 3 또는 3의 배수가 포함되지 않을경우 count증가
    if (!String(num).includes("3") && num % 3 !== 0) count++;
  }

  return num;
}

// 또 다른 풀이방법 01
function solution(n) {
  let x3 = 0;
  // n까지 반복
  for (let i = 1; i <= n; i++) {
    // i에 증가에 따른 x3의 증가
    x3++;
    // 3이 들어가지 않으며, 3의 배수 또한 아닌 경우까지 반복
    while (x3.toString().includes("3") || x3 % 3 === 0) {
      x3++;
    }
  }
  return x3;
}

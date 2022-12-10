// 1차 풀이(테스트 33~35 불통)
function solution(balls, share) {
  var n = 1;
  var m = 1;
  var nm = 1;
  function factorial(num, num1, num2) {
    for (let i = 1; i <= num; i++) {
      n *= i;
    }
    for (let i = 1; i <= num1; i++) {
      m *= i;
    }
    for (let i = 1; i <= num2; i++) {
      nm *= i;
    }
  }
  factorial(balls, share, balls - share);
  return n / (nm * m);
}

// 2차 풀이(통과는 했지만 코드 간소화 필요)
function solution(balls, share) {
  var n = BigInt(1);
  var m = BigInt(1);
  var nm = BigInt(1);

  function factorial(num, num1, num2) {
    for (let i = 1; i <= num; i++) {
      n *= BigInt(i);
    }
    for (let i = 1; i <= num1; i++) {
      m *= BigInt(i);
    }
    for (let i = 1; i <= num2; i++) {
      nm *= BigInt(i);
    }
  }
  factorial(balls, share, balls - share);

  return n / (nm * m);
}

// 최종 풀이
function solution(balls, share) {
  return factorial(balls) / (factorial(balls - share) * factorial(share));
}
// 팩토리얼 계산
function factorial(n) {
  var factorialNum = BigInt(1); // BigInt를 통해 길이의 제약 없이 정수를 다룰 수 있음
  for (let i = 1; i <= n; i++) {
    factorialNum *= BigInt(i);
  }
  return factorialNum;
}

// 또 다른 풀이방법 01
const 팩토리얼 = (num) => (num === 0 ? 1 : num * 팩토리얼(num - 1));

function solution(balls, share) {
  return Math.round(
    팩토리얼(balls) / 팩토리얼(balls - share) / 팩토리얼(share)
  );
}

// 또 다른 풀이방법 02
function solution(balls, share) {
  var result = 1;
  while (share > 0) {
    result = (result * balls) / share;
    balls = balls - 1;
    share = share - 1;
  }
  return Math.round(result);
}

// 또 다른 풀이방법 03
function solution(balls, share) {
  return (
    Array.from({ length: share }, (_, i) => balls - i).reduce((a, b) => a * b) /
    Array.from({ length: share }, (_, i) => share - i).reduce((a, b) => a * b)
  );
}

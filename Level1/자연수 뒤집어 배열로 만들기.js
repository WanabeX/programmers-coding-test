// 1차 풀이(오답. 내림차순 정렬이 아닌 배열을 뒤집는 문제)
function solution(n) {
  return (n + "")
    .split("")
    .sort((a, b) => b - a)
    .map((e) => Number(e));
}

// 최종 풀이
function solution(n) {
  return (n + "")
    .split("")
    .reverse()
    .map((e) => Number(e));
}

// 또 다른 풀이방법 01(do while을 이용한 풀이)
function solution(n) {
  var arr = [];

  do {
    arr.push(n % 10);
    n = Math.floor(n / 10);
  } while (n > 0);
  /* [ [ 5 ], 1234 ]
   [ [ 5, 4 ], 123 ]
   [ [ 5, 4, 3 ], 12 ]
   [ [ 5, 4, 3, 2 ], 1 ]
   [ [ 5, 4, 3, 2, 1 ], 0 ] */

  return arr;
}

// 최종 풀이(A와 B가 일치할때 까지 문자 밀기 반복)
function solution(A, B) {
  let arr = [...A];
  for (let i = 0; i < arr.length; i++) {
    if (A === B) return i;
    else {
      arr.unshift(arr.pop());
      if (arr.join("") === B) return i + 1;
    }
  }
  return -1;
}

// 또 다른 풀이방법 01(B를 두개 이어붙인 문자열에서 A가 처음으로 등장하는 인덱스값을 반환)
let solution = (a, b) => (b + b).indexOf(a);

// 또 다른 풀이방법 02(재귀함수 활용)
function solution(A, B) {
  const pushRight = (str) =>
    [str[str.length - 1], ...str.slice(0, str.length - 1)].join("");
  for (let i = 0; i <= A.length; i++) {
    if (A === B) return i;
    A = pushRight(A);
  }
  return -1;
}

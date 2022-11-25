//1차 풀이(테스트 점수 미달 return에 기재된 조건문이 부적절한 것으로 보임)
function solution(num, k) {
  var numArr = String(num)
    .split("")
    .map((arg) => Number(arg));

  return numArr.includes(k) ? numArr.indexOf(k, 1) + 1 : -1;
}

//나의 풀이01(최종 제출)
function solution(num, k) {
  return [...(num + "")].indexOf(k + "") !== -1 // [...num +'']와 같은 형태로 작성하면 number를 string type array로 전환하는 것이 가능하다
    ? [...(num + "")].indexOf(k + "") + 1
    : -1;
}

//나의 풀이02(또 다른 풀이방법의 응용, 배열화 절차 간소화)
function solution(num, k) {
  return [...(num + "")].indexOf(k + "") + 1 || -1;
}

//또 다른 풀이방법 01(or을 이용한 빠른 결과 도출)
function solution(num, k) {
  return (
    num
      .toString()
      .split("")
      .map((el) => Number(el))
      .indexOf(k) + 1 || -1
  );
}

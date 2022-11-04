// 나의 1차 풀이
function solution(dot) {
  var answer = 0;
  var check1 = Math.sign(dot[0]);
  var check2 = Math.sign(dot[1]);
  if (check1 == 1) {
    if (check2 == 1) {
      answer = 1;
    } else {
      answer = 4;
    }
  } else {
    if (check2 == 1) {
      answer = 2;
    } else {
      answer = 3;
    }
  }
  return answer;
}

// 나의 최종 풀이
function solution(dot) {
  var check1 = Math.sign(dot[0]);
  var check2 = Math.sign(dot[1]);
  var answer = 0;
  if (check1 == 1) {
    answer = check2 == 1 ? 1 : 4;
  } else {
    answer = check2 == 1 ? 2 : 3;
  }
  return answer;
}

// 다른 풀이 방식 01(간소화 된 방법)
function solution(dot) {
  const [num, num2] = dot;
  const check = num * num2 > 0;
  return num > 0 ? (check ? 1 : 4) : check ? 3 : 2;
}

// 다른 풀이 방식 02(더 간소화 된 방법)
function solution(dot) {
  return dot[0] > 0 ? (dot[1] > 0 ? 1 : 4) : dot[1] > 0 ? 2 : 3;
}

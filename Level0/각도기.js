// 나의 풀이
function solution(angle) {
  if (0 < angle && angle < 90) {
    return 1;
  } else if (angle === 90) {
    return 2;
  } else if (90 < angle && angle < 180) {
    return 3;
  } else {
    return 4;
  }
}

// 나의 풀이(삼항 조건 연산자 사용)
function solution(angle) {
  return angle < 90 ? 1 : angle === 90 ? 2 : angle < 180 ? 3 : 4;
}

// 또 다른 풀이방식 02(array와 filter 활용)
function solution(angle) {
  return [0, 90, 91, 180].filter((x) => angle >= x).length;
}

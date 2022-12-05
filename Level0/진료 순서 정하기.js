// 최종 풀이(응급도를 내림차순으로 정렬하여 우선순위를 얻은 뒤, 인덱스를 통해 본 배열에 순서를 매김)
function solution(emergency) {
  return emergency.map(
    (x) => [...emergency].sort((a, b) => b - a).indexOf(x) + 1
  );
}

// 또 다른 풀이방법 01(값. 인덱스를 함께 배열로 지정하여 순위 찾기)
function solution(emergency) {
  return emergency
    .map((v, i) => [v, i])
    .sort((a, b) => b[0] - a[0])
    .map((a, i) => [...a, i + 1])
    .sort((a, b) => a[1] - b[1])
    .map((a) => a[2]);
}

// 또 다른 풀이방법 02(set을 이용하여 중복값에 대비)
function solution(emergency) {
  const sorted = [...new Set(emergency)].sort((a, b) => b - a);
  const rank = new Map(sorted.map((x, i) => [x, i + 1]));
  return emergency.map((x) => rank.get(x));
}

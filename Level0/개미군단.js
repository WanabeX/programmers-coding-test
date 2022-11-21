// 나의 풀이
function solution(hp) {
  const general = Math.floor(hp / 5);
  const soldier = Math.floor((hp % 5) / 3);
  const worker = (hp % 5) % 3;
  return general + soldier + worker;
}

// 또 다른 풀이방식 01 (간소화된 방법)
function solution(hp) {
  return Math.floor(hp / 5) + Math.floor((hp % 5) / 3) + ((hp % 5) % 3);
}

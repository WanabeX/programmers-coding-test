// 최종 풀이
function solution(spell, dic) {
  // sort를 이용하여 spell과 dic을 정렬하여 일치여부를 확인
  return dic
    .map((i) => [...i].sort().join(""))
    .find((e) => e === spell.sort().join("")) != undefined
    ? 1
    : 2;
}

// 또 다른 풀이방법 01 (every활용)
function solution(spell, dic) {
  return dic.filter((v) => spell.every((c) => v.includes(c))).length ? 1 : 2;
}

// 또 다른 풀이방법 02 (some활용)
function solution(p, d) {
  return d.some((s) => p.sort().toString() == [...s].sort().toString()) ? 1 : 2;
}

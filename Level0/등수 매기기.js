// 최종 풀이
function solution(score) {
  let rank = score.map((i) => i[0] + i[1]); // 영어,수학점수를 더해 1차원 배열로
  let scoLen = score.length;
  let result = Array.from({ length: scoLen }, () => 1);
  // 이중 for문을 이용해 점수들을 비교하여 순위를 매김
  for (let i = 0; i < scoLen; i++) {
    for (let j = 0; j < scoLen; j++) {
      if (rank[j] > rank[i]) {
        result[i]++;
      }
    }
  }
  return result;
}

// 또 다른 풀이방식 01
function solution(score) {
  return score.map((el) => {
    return (
      score.filter((v) => (v[0] + v[1]) / 2 > (el[0] + el[1]) / 2).length + 1
    );
  });
}

// 또 다른 풀이방식 02
function solution(score) {
  const answer = [];
  for (const [a, b] of score) {
    const ab = (a + b) / 2;
    let cnt = 1;
    for (const [aa, bb] of score) {
      const aabb = (aa + bb) / 2;
      if (aabb > ab) cnt++;
    }
    answer.push(cnt);
  }
  return answer;
}

// 또 다른 풀이방식 03
function solution(score) {
  let avg = score.map((v) => (v[0] + v[1]) / 2);
  let sorted = avg.slice().sort((a, b) => b - a);
  return avg.map((v) => sorted.indexOf(v) + 1);
}

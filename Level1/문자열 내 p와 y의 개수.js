// 1차 풀이
function solution(s) {
  const lowArr = [...s.toLowerCase()];
  let countP = 0;
  let countY = 0;
  for (let i = 0; i <= lowArr.length; i++) {
    if (lowArr[i] === "p") {
      countP = countP + 1;
    } else if (lowArr[i] === "y") {
      countY = countY + 1;
    }
  }

  return countP === countY ? true : false;
}

// 최종 풀이(가독성 높이기)
function solution(s) {
  const lowArr = [...s.toLowerCase()];
  let [p, y] = [0, 0];
  for (let i = 0; i <= lowArr.length; i++) {
    if (lowArr[i] === "p") {
      p++;
    } else if (lowArr[i] === "y") {
      y++;
    }
  }

  return p === y ? true : false;
}

// 또 다른 풀이방법 01(각각 P와 Y를 기준으로 split하여 서로 비교)
function solution(s) {
  return (
    s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length
  );
}

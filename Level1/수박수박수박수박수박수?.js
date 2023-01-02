// 최종 풀이
function solution(n) {
  var answer = "";
  for (let i = 1; i <= Math.ceil(n / 2); i++) {
    answer += "수박";
  }
  return n % 2 != 0 ? answer.replace(/박$/, "") : answer;
}

// 또 다른 풀이방법 01
const solution = (n) => {
  return "수박".repeat(n / 2) + (n % 2 === 1 ? "수" : "");
};

// 또 다른 풀이방법 02
const solution = (n) => "수박".repeat(n).slice(0, n);

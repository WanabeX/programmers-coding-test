// 나의 풀이
function solution(cipher, code) {
  var answer = "";
  for (let i = code; i <= cipher.length; i++) {
    if (i % code == 0) {
      answer += cipher.charAt(i - 1);
    }
  }
  return answer;
}

// 또 다른 풀이방식 01(for 응용)
function solution(cipher, code) {
  var answer = "";
  for (let i = code - 1; i < cipher.length; i += code) {
    answer += cipher[i];
  }
  return answer;
}

// 또 다른 풀이방식 02(filter 활용)
function solution(cipher, code) {
  return cipher
    .split("")
    .filter((_, index) => (index + 1) % code === 0)
    .join("");
}

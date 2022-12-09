// 1차 풀이(통과 된 코드이지만 더 간소화 할 방법을 찾음)
function solution(M, N) {
  return M * N === 1 ? 0 : M * N - 1;
}

// 최종 풀이(-1을 해주면 1*1사이즈에 대응할 수 있으므로 조건 불필요)
function solution(M, N) {
  return M * N - 1;
}

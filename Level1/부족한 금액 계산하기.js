// 1차 풀이(테스트4 불통. 금액이 부족하지 않을경우를 고려하지 않음)
function solution(price, money, count) {
  var totalPrice = 0;
  for (let i = 1; i <= count; i++) {
    totalPrice += price * i;
  }
  return totalPrice - money;
}

// 최종 풀이
function solution(price, money, count) {
  var totalPrice = 0;
  // 놀이기구를 n번 탈 경우 총 비용 계산
  for (let i = 1; i <= count; i++) {
    totalPrice += price * i;
  }
  return totalPrice <= money ? 0 : totalPrice - money;
}

// 또 다른 풀이방법 01(1-x까지의 합을 구하는 n*(n+1)'에)
function solution(price, money, count) {
  const tmp = (price * count * (count + 1)) / 2 - money;
  return tmp > 0 ? tmp : 0;
}

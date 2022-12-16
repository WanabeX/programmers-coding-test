// 최종 풀이
function solution(chicken) {
  //chicken값을 이용하여 쿠폰을 사용해 시켜먹을 수 있는 치킨의 수를 구함
  let result = 0;
  let remainder = chicken % 10;
  let coupon = Math.floor(chicken / 10);
  result += coupon;
  coupon += remainder;
  //쿠폰을 다 사용할 때 까지 치킨 수를 구함
  while (true) {
    remainder = coupon % 10;
    coupon = Math.floor(coupon / 10);
    result += coupon;
    if (coupon === 0) {
      break;
    }
    coupon += remainder;
  }
  return result;
}

// 또 다른 풀이방법 01(위의 풀이와 유사한 방식으로 과정 단순화)
function solution(chicken) {
  let answer = 0;
  let coupon = chicken;

  while (coupon >= 10) {
    answer = answer + parseInt(coupon / 10);
    coupon = parseInt(coupon / 10) + (coupon % 10);
  }

  return answer;
}

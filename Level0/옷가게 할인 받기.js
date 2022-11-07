// 나의 풀이
function solution(price) {
  var per = 0;
  if (price >= 100000) {
    per = 5;
  }
  if (price >= 300000) {
    per = 10;
  }
  if (price >= 500000) {
    per = 20;
  }
  var disPrice = Math.ceil((price * per) / 100);
  return price - disPrice;
}

// 또 다른 풀이방식01(소수를 이용해 바로 계산하는 방식)
function solution(price) {
  var answer = price;
  if (answer >= 500000) {
    answer *= 0.8;
  } else if (answer >= 300000) {
    answer *= 0.9;
  } else if (answer >= 100000) {
    answer *= 0.95;
  }

  return parseInt(answer);
}

// 또 다른 풀이방식02(할인 기준과 할인률을 배열로 지정하여 for of 사용)
const discounts = [
  [500000, 20],
  [300000, 10],
  [100000, 5],
];

const solution = (price) => {
  for (const discount of discounts)
    if (price >= discount[0])
      return Math.floor(price - (price * discount[1]) / 100);
  return price;
};

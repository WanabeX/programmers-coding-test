//나의 풀이
function solution(n) {
  var pizza = 0;
  for (let i = 1; true; i++) {
    pizza++;
    if ((i * 6) % n == 0) {
      break;
    }
  }
  return pizza;
}

//또 다른 풀이방법 01(while 활용)
function solution(n) {
  let pizza = 1;
  while ((pizza * 6) % n) {
    pizza++;
  }
  return pizza;
}

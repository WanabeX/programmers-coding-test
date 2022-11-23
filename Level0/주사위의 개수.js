// 나의 풀이 01
function solution(box, n) {
  var answer = [];
  box.map((obj) => {
    answer.push(Math.floor(obj / n));
  });
  return answer.reduce((a, b) => a * b);
}

//또 다른 풀이방식 01(비구조화 할당 활용)
function solution(box, n) {
  let [width, length, height] = box;
  return (
    Math.floor(width / n) * Math.floor(length / n) * Math.floor(height / n)
  );
}

//또 다른 풀이방식 02(Math.floor()의 역할을 하는 ~~연산자)
function solution(box, n) {
  return box.map((v) => ~~(v / n)).reduce((a, v) => a * v, 1);
}

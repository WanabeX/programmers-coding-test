// 최종 풀이
function solution(numbers) {
  var num = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  // 인덱스에 해당하는 문자를 잘라낸 자리를 i로 대체함
  for (let i = 0; i <= num.length; i++) {
    numbers = numbers.split(num[i]).join(i);
  }
  // string > number
  return Number(numbers);
}

// 또 다른 풀이방법 01(object와 replace활용)
function solution(numbers) {
  const obj = {
    zero: 0,
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
  };

  const num = numbers.replace(
    /zero|one|two|three|four|five|six|seven|eight|nine/g,
    (v) => {
      return obj[v];
    }
  );

  return Number(num);
}

// 또 다른 풀이방법 02(reduce와 replaceAll 활용)
function solution(numbers) {
  return Number(
    [
      "zero",
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
    ].reduce((t, s, i) => t.replaceAll(s, i), numbers)
  );
}

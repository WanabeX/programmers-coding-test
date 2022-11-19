// 나의 풀이
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let answer = "";

rl.on("line", function (line) {
  input = line.split(" ");
}).on("close", function () {
  let answer = "";
  for (let i = 0; i < input[0]; i++) {
    for (let j = 0; j <= i; j++) {
      answer += "*";
    }
    answer += "\n";
  }
  console.log(answer);
});

// 또 다른 풀이 방법 01(repeat활용)
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = line.split(" ");
}).on("close", function () {
  for (let i = 1; i <= +input[0]; i++) console.log("*".repeat(i));
});

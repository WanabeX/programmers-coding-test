// 최종 풀이
process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);

  for (let i = 1; i <= +n[1]; i++) {
    console.log("*".repeat(n[0]));
  }
});

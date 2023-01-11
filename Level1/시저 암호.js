// 풀이방법 01
function solution(s, n) {
  return s
    .split("")
    .map((value) => {
      //공백일 경우 공백을 그대로 리턴
      if (value === " ") return value;
      // 대문자 아스키코드로 변환한 값에 n을 더한 값이 90(Z)를 넘어갈 경우 -26을 하여 65(A)로 돌아가 밀어줌
      return value.toUpperCase().charCodeAt() + n > 90
        ? String.fromCharCode(value.charCodeAt() + n - 26)
        : String.fromCharCode(value.charCodeAt() + n);
    })
    .join("");
}

// 풀이방법 02
function solution(s, n) {
  var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lower = "abcdefghijklmnopqrstuvwxyz";
  var answer = "";

  for (var i = 0; i < s.length; i++) {
    var text = s[i];
    //s[i]이 공백일 경우
    if (text == " ") {
      answer += " ";
      continue;
    }
    //대소문자 구분
    var textArr = upper.includes(text) ? upper : lower;
    //n만큼 밀어낸 인덱스값
    var index = textArr.indexOf(text) + n;
    //인덱스 값이 string길이 이상일 경우
    if (index >= textArr.length) index -= textArr.length;
    answer += textArr[index];
  }
  return answer;
}

// 풀이방법 03
function solution(s, n) {
  //s와 chars를 비교하여 겺치는 값의 인덱스를 n만큼 밀어줌
  var chars =
    "abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ";
  return s
    .split("")
    .map((e) => chars[chars.indexOf(e) + n])
    .join("");
}

// 풀이방법 04(이해하고 넘어가기)
function solution(s, n) {
  var result = s.replace(
    /[a-z]/gi,
    (c) =>
      [
        (c = c.charCodeAt(0)),
        String.fromCharCode((c & 96) + (((c % 32) + n - 1) % 26) + 1),
      ][1]
  );

  return result;
}

/* 풀이 과정: 2진법 대문자의 코드들은 1000001~1011010, 소문자는 1100001~1111010이기 때문에 맨앞 두자리를 제외하면 동일함. 
그러므로, 앞의 2자리로 대소문자를, 나머지 5자리로 알파벳을 구분. 따라서 '(c & 96(1100000))'으로 앞의 2자리만 가져와 
먼저 대소문자 구분부를 빼놓음. 뒤에 남은 5자리의 수(00001~11010)를 가져오기 위해 'c % 32(100000)'를 함. 
a가 1부터 시작하니 나머지 계산을 위해 '- 1'을 해서 초기점을 0으로(00000~11001) 잡아줌. 
이렇게 하면 0~25의 숫자 중 하나가 나오고 여기서 n만큼 더해준 뒤 26으로 나머지 계산을 하고 다시 아까 빼 준 1을 다시 더한 것.*/

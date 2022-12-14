// 1차 풀이(테스트1, 5 불통 fail에 대한 조건이 불분명한 것이 원인)
function solution(id_pw, db) {
  const database = db.flat();
  return database.includes(id_pw[0]) && database.includes(id_pw[1])
    ? "login"
    : !database.includes(id_pw[1])
    ? "wrong pw"
    : "fail";
}

// 최종 풀이
function solution(id_pw, db) {
  const [id, pw] = id_pw;
  var result = "";
  db.map(([_id, _pw]) => {
    if (_id == id && _pw == pw) {
      result = "login";
    } else if (_id == id && _pw != pw) {
      result = "wrong pw";
    } else if (_id != id && _pw != pw) {
      result = "fail";
    }
  });
  return result;
}

// 또 다른 풀이방법 01(find를 이용하여 id_pw db와 일치여부 확인)
function solution(id_pw, db) {
  const [id, pw] = id_pw;
  if (!db.find(([_id]) => _id === id)) return "fail";
  return db.find(([_id, _pw]) => _id === id && _pw === pw)
    ? "login"
    : "wrong pw";
}

// 또 다른 풀이방법 02(체크 결과를 boolean 형태로 저장)
function solution(id_pw, db) {
  let ID_CHECK = false;
  let PW_CHECK = false;

  db.map((item) => {
    // 아이디와 비밀번호가 같은 경우 그냥 return
    if (item[0] === id_pw[0] && item[1] === id_pw[1]) {
      console.log(item);
      console.log(id_pw);
      ID_CHECK = true;
      PW_CHECK = true;
      return;
    }

    // ID가 같은 경우 ID_CHECK를 true로 만들고, PW를 체킹
    if (item[0] === id_pw[0]) {
      ID_CHECK = true;
      if (item[1] === id_pw[1]) {
        PW_CHECK = true;
      }
    }
  });

  if (ID_CHECK && PW_CHECK) {
    return "login";
  } else if (ID_CHECK && PW_CHECK === false) {
    return "wrong pw";
  } else {
    return "fail";
  }
}

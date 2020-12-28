import Axios from "axios";
import React, { useState } from "react";

const SignUp = () => {
  const [user, setUser] = useState({
    userEmail: "",
    userName: "",
    userPassword: "",
  });
  const { userEmail, userName, userPassword } = user;

  const signUpBtn = () => {
    console.log("회원가입");
    const url = `${process.env.REACT_APP_URL}/join`;
    Axios.post(url, {
      email: userEmail,
      name: userName,
      password: userPassword,
    })
      .then((res) => {
        console.log(res);
        inputReset();
        if (res.status === 200) {
          alert("가입이 완료 되었습니다.");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const changeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const inputReset = (e) => {
    setUser({
      userEmail: "",
      userName: "",
      userPassword: "",
    });
  };

  return (
    <div>
      <br />
      이메일 :{" "}
      <input
        type="text"
        name="userEmail"
        onChange={changeInput}
        value={userEmail}
      />
      <br />
      이름 :{" "}
      <input
        type="text"
        name="userName"
        onChange={changeInput}
        value={userName}
      />
      <br />
      비밀번호 :{" "}
      <input
        type="password"
        name="userPassword"
        onChange={changeInput}
        value={userPassword}
      />
      <br />
      <input type="button" value="회원가입" onClick={signUpBtn} />
      <br />
    </div>
  );
};

export default SignUp;

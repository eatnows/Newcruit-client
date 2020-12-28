import Axios from "axios";
import React, { useState } from "react";
import ReactDom from "react-dom";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import { Link, useHistory } from "react-router-dom";
import signUp from "./signup";

const Login = (props) => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  const responseGoogle = (response) => {
    console.log(response);
  };

  const responseFail = (err) => {
    console.log("구글 로그인 실패");
    console.log(err);
    console.error(err);
  };

  const googleBtn = (e) => {
    console.log("로그인버튼 클릭112");
    const url = `${process.env.REACT_APP_URL}/oauth2/authorization/google`;
    Axios.post(url)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const loginInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const loginBtn = (e) => {
    const url = `${process.env.REACT_APP_URL}/login`;
    Axios({
      method: "POST",
      url: url,
      data: {
        email: email,
        password: password,
      },
    })
      .then((res) => {
        const bearer = res.headers.authorization;
        if (bearer.startsWith("Bearer ")) {
          alert("로그인이 완료 되었습니다.");
        }
        const authorization = bearer.replace("Bearer ", "");
        localStorage.setItem("jwtToken", authorization);
      })
      .catch((err) => {
        console.log(err);
        console.log("gggg");
      });
  };

  return (
    <>
      <br />
      아이디 : <input type="text" name="email" onChange={loginInput} />
      비밀번호 : <input type="password" name="password" onChange={loginInput} />
      <input type="button" value="로그인" onClick={loginBtn} />
      <br />
      <Link to="/signup">회원가입</Link>
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE}
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
        redirectUri="http://localhost:8080"
      />
    </>
  );
};

export default Login;

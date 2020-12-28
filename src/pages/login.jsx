import axios from "axios";
import React from "react";
import ReactDom from "react-dom";
import GoogleLogin, { GoogleLogout } from "react-google-login";
import { Link } from "react-router-dom";
import signUp from "./signup";

const Login = () => {
  const responseGoogle = (response) => {
    console.log(response);
  };

  const responseFail = (err) => {
    console.log("구글 로그인 실패");
    console.log(err);
    console.error(err);
  };

  const logout = (res) => {
    console.log(res);
  };

  const googleBtn = (e) => {
    console.log("로그인버튼 클릭112");
    const url = `${process.env.REACT_APP_URL}/oauth2/authorization/google`;
    axios
      .post(url)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <br />
      아이디 : <input type="text" name="name" />
      비밀번호 : <input type="password" name="password" />
      <input type="button" value="로그인" />
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
      <GoogleLogout
        clientId={process.env.REACT_APP_GOOGLE}
        buttonText="Logout"
        onLogoutSuccess={logout}
      ></GoogleLogout>
    </>
  );
};

export default Login;

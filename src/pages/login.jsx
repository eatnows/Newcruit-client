import axios from "axios";
import React from "react";
import ReactDom from "react-dom";
import GoogleLogin, { GoogleLogout } from "react-google-login";

const Login = () => {
  const responseGoogle = (response) => {
    console.log(response);
    const email = response.profileObj.email;
    const name = response.profileObj.name;

    const url = `${process.env.PUBLIC_URL}/login`;
    axios.post(url, {
      email: email,
      name: name,
    });
  };

  const responseFail = (err) => {
    console.log("구글 로그인 실패");
    console.log(err);
    console.error(err);
  };

  const logout = (res) => {
    console.log(res);
  };

  return (
    <>
      <GoogleLogin
        clientId={process.env.REACT_APP_GOOGLE}
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
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

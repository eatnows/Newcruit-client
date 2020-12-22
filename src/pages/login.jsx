import React from "react";
import REactDom from "react-dom";
import GoogleLogin from "react-google-login";

const Login = () => {
  const responseGoogle = (response) => {
    console.log(response);
  };

  const responseFail = (err) => {
    console.error(err);
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
    </>
  );
};

export default Login;

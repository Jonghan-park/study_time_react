import React from "react";
import "../styles/Login.css";
import GoogleOauth from "../components/GoogleOauth";

const Login = () => {
  return (
    <div className="form_container">
      <form>
        <h1>Login</h1>
        <p>Please Login to Continue</p>
        <hr className="divider" />
        <div className="oauth_container">
          <GoogleOauth />
        </div>
      </form>
    </div>
  );
};

export default Login;

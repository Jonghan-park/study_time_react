import React from "react";
import "../styles/Login.css";
import GoogleOauth from "../components/GoogleOauth";
import { useSelector } from "react-redux";

const Login = () => {
  const isAuth = useSelector((state) => state.user.isAuthenticated);
  return isAuth ? (
    <div>
      <h1>You're already logged in.</h1>
    </div>
  ) : (
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

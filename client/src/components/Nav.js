import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { jwtDecode } from "jwt-decode";
import "../styles/Nav.css";
import { setUser } from "../features/user/userSlice";

const Nav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const goBack = () => {
    navigate("/");
  };

  useEffect(() => {
    const getUserToken = localStorage.getItem("userToken");
    if (getUserToken) {
      const tokenData = jwtDecode(getUserToken);
      dispatch(setUser(tokenData.user));
    }
  }, []);

  return (
    <nav>
      {location.pathname === "/login" ? (
        <div className="go_back_container">
          <FaArrowLeft onClick={() => goBack()} className="go_back" />
        </div>
      ) : (
        <div className="login_container">
          <Link to="/login" className="login">
            Login
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Nav;

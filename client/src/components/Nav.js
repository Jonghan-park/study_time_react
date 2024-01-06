import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { jwtDecode } from "jwt-decode";
import "../styles/Nav.css";
import { setUser, logout } from "../features/user/userSlice";

const Nav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const goBack = () => {
    navigate("/");
  };

  const logoutUser = () => {
    localStorage.removeItem("userToken");
    dispatch(logout());
  };

  useEffect(() => {
    const getUserToken = localStorage.getItem("userToken");
    if (getUserToken) {
      const tokenData = jwtDecode(getUserToken);
      dispatch(setUser(tokenData.user));
    }
  }, [user.isAuthenticated]);

  return (
    <nav>
      {location.pathname === "/login" ? (
        <div className="go_back_container">
          <FaArrowLeft onClick={() => goBack()} className="go_back" />
        </div>
      ) : user.isAuthenticated ? (
        <div className="profile_container">
          {/* <Link to="/profile" className="profile"> */}
          <Link to="#" className="profile">
            Hello! {user.user.name.givenName}
          </Link>
          <hr />
          <p onClick={logoutUser}>Logout</p>
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

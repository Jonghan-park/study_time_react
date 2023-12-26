import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import "../styles/Nav.css";

const Nav = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/");
  };

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

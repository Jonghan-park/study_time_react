import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import "../styles/Nav.css";

const Nav = () => {
  const location = useLocation();
  return (
    <nav>
      {location.pathname === "/login" ? (
        <div className="go_back_container">
          <FaArrowLeft className="go_back" />
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

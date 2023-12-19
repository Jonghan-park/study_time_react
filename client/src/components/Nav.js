import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <div class="login_container">
        <Link to="/login" class="login">
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Nav;

import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import { jwtDecode } from "jwt-decode";
import axios from "axios";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import PrivateRoute from "./components/PrivateRoute";
import Nav from "./components/Nav";
import { setUser } from "./features/user/userSlice";

function App() {
  const dispatch = useDispatch();
  const getUser = async () => {
    await fetch(
      "https://study-time-web-server.onrender.com/auth/login/success",
      {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      }
    )
      .then((response) => response.json())
      .then((responseJson) =>
        localStorage.setItem("userToken", responseJson.token)
      )
      .catch((error) => {
        console.log("Error: " + error);
      });
  };

  useEffect(() => {
    const token = localStorage.getItem("userToken");
    if (token) {
      const tokenData = jwtDecode(token);
      dispatch(setUser(tokenData.user));
    }
    getUser();
  }, []);
  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          {/* <Route
            path="/profile"
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;

import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Nav from "./components/Nav";
import store from "./store/store";

function App() {
  useEffect(() => {
    const getUser = async () => {
      await fetch("http://localhost:5000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
        })
        .then((responseJson) => {
          console.log(responseJson);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getUser();
  }, []);
  return (
    <Provider store={store}>
      <div className="App">
        <Router>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </div>
    </Provider>
  );
}

export default App;

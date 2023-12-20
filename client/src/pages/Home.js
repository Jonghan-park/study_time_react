import React, { useRef } from "react";
import Timer from "../container/Timer";
import Buttons from "../container/Buttons";
import "../styles/Home.css";

const Home = () => {
  const fullRef = useRef(null);
  return (
    <main ref={fullRef}>
      <Timer fullRef={fullRef} />
      <Buttons />
    </main>
  );
};

export default Home;

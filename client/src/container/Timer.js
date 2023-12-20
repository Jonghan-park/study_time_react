import React from "react";
import { MdOutlineFullscreen } from "react-icons/md";
import "../styles/Timer.css";

const Timer = () => {
  return (
    <div className="time_container">
      <h2 className="title">Count Study Hours</h2>
      <div className="time">
        <h1 className="hour">0</h1>
        <span>:</span>
        <h1 className="minutes">00</h1>
        <span>:</span>
        <h1 className="seconds">00</h1>
        <div className="full_screen_mode">
          <MdOutlineFullscreen className="full_screen" />
        </div>
      </div>
    </div>
  );
};

export default Timer;

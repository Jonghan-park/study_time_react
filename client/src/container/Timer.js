import React from "react";
import { MdOutlineFullscreen } from "react-icons/md";
import "../styles/Timer.css";

const Timer = () => {
  return (
    <div class="time_container">
      <h2 class="title">Count Study Hours</h2>
      <div class="time">
        <h1 class="hour">0</h1>
        <span>:</span>
        <h1 class="minutes">00</h1>
        <span>:</span>
        <h1 class="seconds">00</h1>
        <div class="full_screen_mode">
          <MdOutlineFullscreen class="full_screen" />
        </div>
      </div>
    </div>
  );
};

export default Timer;

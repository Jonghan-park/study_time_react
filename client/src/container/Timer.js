import React, { useState, useRef } from "react";
import { MdOutlineFullscreen, MdFullscreenExit } from "react-icons/md";
import "../styles/Timer.css";

const Timer = ({ fullRef }) => {
  const [fullscreen, setFullscreen] = useState(false);

  const fullScreenMode = () => {
    setFullscreen(true);
    if (fullRef.current) {
      const element = fullRef.current;
      if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen();
      } else {
        console.error("Fullscreen API is not supported in this browser.");
      }
    }
  };

  const exitFullScreenMode = () => {
    setFullscreen(false);

    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else {
      console.error("Fullscreen API is not supported in this browser.");
    }
  };

  return (
    <div ref={fullRef} className="time_container">
      <h2 className="title">Count Study Hours</h2>
      <div className="time">
        <h1 className="hour">0</h1>
        <span>:</span>
        <h1 className="minutes">00</h1>
        <span>:</span>
        <h1 className="seconds">00</h1>
        <div className="full_screen_mode">
          {fullscreen ? (
            <MdFullscreenExit
              onClick={exitFullScreenMode}
              className="full_screen"
            />
          ) : (
            <MdOutlineFullscreen
              onClick={fullScreenMode}
              className="full_screen"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Timer;

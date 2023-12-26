import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdOutlineFullscreen, MdFullscreenExit } from "react-icons/md";
import "../styles/Timer.css";
import { incrementSec } from "../features/timer/timerSlice";

const Timer = ({ fullRef }) => {
  const [fullscreen, setFullscreen] = useState(false);

  const dispatch = useDispatch();
  const isOn = useSelector((state) => state.operation.isOn);
  const { sec, min, hour } = useSelector((state) => state.timer);

  useEffect(() => {
    let intervalId;
    if (isOn) {
      intervalId = setInterval(() => {
        dispatch(incrementSec());
      }, 1000);
    } else {
      clearInterval(intervalId);
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [isOn, dispatch]);

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
        <h1 className="hour">{hour}</h1>
        <span>:</span>
        <h1 className="minutes">{min}</h1>
        <span>:</span>
        <h1 className="seconds">{sec}</h1>
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

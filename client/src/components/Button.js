import React from "react";
import { useDispatch } from "react-redux";
import {
  startTimer,
  stopTimer,
  resetTimer,
  saveTimer,
} from "../features/operation/operationSlice";
import { resetTime } from "../features/timer/timerSlice";

const Button = ({ name }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    switch (name) {
      case "Start":
        dispatch(startTimer());
        break;
      case "Stop":
        dispatch(stopTimer());
        break;
      case "Reset":
        dispatch(resetTimer());
        dispatch(resetTime());
        break;
      case "Save":
        dispatch(saveTimer());
        break;
      default:
        break;
    }
  };
  return (
    <button onClick={handleClick} className={`btn btn_${name}`}>
      {name}
    </button>
  );
};

export default Button;

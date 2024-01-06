import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  startTimer,
  stopTimer,
  resetTimer,
  saveTimer,
} from "../features/operation/operationSlice";
import { resetTime } from "../features/timer/timerSlice";
import { jwtDecode } from "jwt-decode";
import createEvent from "./CreateEvent";
import Modal from "./Modal";
import { closeModal, openModal } from "../features/modal/modalSlice";

const Button = ({ name }) => {
  const [currentDate, setCurrentDate] = useState(new Date().toISOString());
  const [timeZone, setTimeZone] = useState(
    Intl.DateTimeFormat().resolvedOptions().timeZone
  );
  const time = useSelector((state) => state.timer);
  const isModalOpen = useSelector((state) => state.modal.isOpen);
  const dispatch = useDispatch();

  const handleGoogleCalendar = async () => {
    const formattedTime = `${time.hour} ${time.hour > 1 ? "hours" : "hour"} ${
      time.min
    } ${time.min > 1 ? "minutes" : "minute"} ${time.sec} ${
      time.sec > 1 ? "seconds" : "second"
    }`;
    const eventBody = createEvent(formattedTime, currentDate, timeZone);

    const accessToken = localStorage.getItem("userToken");
    const tokenData = jwtDecode(accessToken);

    await fetch(
      "https://www.googleapis.com/calendar/v3/calendars/primary/events",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${tokenData.accessToken}`,
        },
        body: eventBody,
      }
    )
      .then((data) => {
        return data.json();
      })
      .then((res) => {
        dispatch(openModal());
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
        // handleGoogleCalendar();
        dispatch(openModal());
        dispatch(saveTimer());
        break;
      default:
        break;
    }
  };
  const handleCloseModal = () => {
    dispatch(closeModal());
  };

  return (
    <>
      <button onClick={handleClick} className={`btn btn_${name}`}>
        {name}
      </button>
      <Modal isOpen={isModalOpen}>
        <h1>Event Saved!</h1>
        <p>Event has been saved to your Google Calendar</p>
        <button className="close-button" onClick={handleCloseModal}>
          Close
        </button>
      </Modal>
    </>
  );
};

export default Button;

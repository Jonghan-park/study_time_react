import React from "react";
import Button from "../components/Button";
import "../styles/Buttons.css";

const Buttons = () => {
  return (
    <div class="button_container">
      <Button name="Start" />
      <Button name="Stop" />
      <Button name="Reset" />
      <Button name="Save" />
    </div>
  );
};

export default Buttons;

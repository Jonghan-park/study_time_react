import React from "react";

const Button = ({ name }) => {
  return (
    <div class="button_container">
      <button class={`btn btn_${name}`}>{name}</button>
    </div>
  );
};

export default Button;

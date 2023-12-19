import React from "react";

const Button = ({ name }) => {
  return <button class={`btn btn_${name}`}>{name}</button>;
};

export default Button;

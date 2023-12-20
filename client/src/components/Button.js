import React from "react";

const Button = ({ name }) => {
  return <button className={`btn btn_${name}`}>{name}</button>;
};

export default Button;

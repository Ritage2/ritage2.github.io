import React from 'react';

const Button = ({ bgColor = "Black", handleClick, btnName }) => {
  return (
    <button
      style={{ backgroundColor: bgColor }}
      onClick={handleClick}
    >
      {btnName ? btnName : "11111"}
    </button>
  );
};

export default Button;

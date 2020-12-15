import React from "react";

const Alert = ({ text }) => {
  return (
    <p class='w-98 ba br2 pa3 ma2 green bg-washed-green' role='alert'>
      {text}
    </p>
  );
};
export default Alert;

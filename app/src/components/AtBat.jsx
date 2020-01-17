import React from "react";

const AtBat = props => {
  return (
    <div className="AtBat">
      <p>strikes : {props.strikes}</p>
      <p>balls: {props.balls}</p>
    </div>
  );
};

export default AtBat;

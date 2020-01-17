import React from "react";
// single functional component
const ScoreCard = props => {
  return (
    <div className={props.who === props.team ? "ScoreCard AtBat" : "ScoreCard"}>
      <p>{props.score}</p>
      <h2>{props.team}</h2>
    </div>
  );
};

export default ScoreCard;

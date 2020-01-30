import React from "react";
import "./App.css";
import TeamScore from "./TeamScore";

const TopRow = (props) => {
  return (
    <div className="topRow">
      <TeamScore teamLocation="home" score={props.homeScore} />
      <div className="timer">00:03</div>
      <TeamScore teamLocation="away" score={props.awayScore} />
    </div>
  );
};

export default TopRow;

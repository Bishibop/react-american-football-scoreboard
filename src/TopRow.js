import React from "react";
import "./App.css";
import TeamScore from "./TeamScore";

function clockFormat(time) {
  return time < 10 ? '0' + time : time.toString();
}

const TopRow = (props) => {
  function gameTime(seconds) {
    let displaySeconds = seconds % 60;
    let displayMinutes = Math.floor(seconds / 60);
    return `${clockFormat(displayMinutes)}:${clockFormat(displaySeconds)}`;
  }
  return (
    <div className="topRow">
      <TeamScore teamLocation="home" score={props.homeScore} />
      <div className="timer">{ gameTime(props.clockSeconds) }</div>
      <TeamScore teamLocation="away" score={props.awayScore} />
    </div>
  );
};

export default TopRow;

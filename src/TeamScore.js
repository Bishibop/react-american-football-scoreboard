import React from "react";
import "./App.css";

const TeamScore = (props) => {
  return (
      <div className={props.teamLocation}>
        <h2 className={props.teamLocation + "__name"}>Lions</h2>
        <div className={props.teamLocation + "__score"}>{props.score}</div>
      </div>
  );
};

export default TeamScore;

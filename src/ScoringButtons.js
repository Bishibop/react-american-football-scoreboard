import React from "react";
import "./App.css";

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.substring(1);
}

const ScoringButtons = (props) => {
  return (
      <div className={`${props.teamLocation}Buttons`}>
        <button onClick={ () => props.setScore(props.score + 7) } className={`${props.teamLocation}Buttons__touchdown`}>{capitalize(props.teamLocation)} Touchdown</button>
        <button onClick={ () => props.setScore(props.score + 3) } className={`${props.teamLocation}Buttons__fieldGoal`}>{capitalize(props.teamLocation)} Field Goal</button>
      </div>
  );
};

export default ScoringButtons;

//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";
import TopRow from "./TopRow";
import ScoringButtons from "./ScoringButtons";

const toggleClock = function() {
  let interval = null;
  let internalSeconds = 0;
  return function(seconds,
                  setSeconds,
                  isClockRunning,
                  setIsClockRunning) {
    let internalSeconds = seconds;
    if (isClockRunning) {
      clearInterval(interval);
      interval = null;
      setIsClockRunning(false);
    } else {
      interval = setInterval(() => {
        internalSeconds += 1;
        setSeconds(internalSeconds);
      }, 1000);
      setIsClockRunning(true);
    }
  };
}();

function App() {
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  const [quarter, setQuarter] = useState(1);
  const [clockSeconds, setClockSeconds] = useState(0);
  const [isClockRunning, setIsClockRunning] = useState(false);

  return (
    <div className="container">
      <section className="scoreboard">
        <TopRow
          homeScore={homeScore}
          awayScore={awayScore}
          clockSeconds={clockSeconds}/>
        <BottomRow quarter={quarter} />
      </section>
      <section className="buttons">
        <ScoringButtons
          teamLocation="home"
          score={homeScore}
          setScore={ setHomeScore }
        />
        <ScoringButtons
          teamLocation="away"
          score={awayScore}
          setScore={ setAwayScore }
        />
        <div className="quarter-button">
          <button
            onClick={ () => setQuarter(quarter <= 3 ? quarter + 1 : quarter - 3) }
          >Next Quarter</button>
        </div>
        <div className="toggle-clock-button">
          <button
            onClick={ () => {toggleClock(clockSeconds, setClockSeconds, isClockRunning, setIsClockRunning)} }
          >{isClockRunning ? "Stop Clock" : "Start Clock"}</button>
        </div>
      </section>
    </div>
  );
}

export default App;

//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.css";
import BottomRow from "./BottomRow";
import TopRow from "./TopRow";
import ScoringButtons from "./ScoringButtons";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);

  return (
    <div className="container">
      <section className="scoreboard">
        <TopRow homeScore={homeScore} awayScore={awayScore} />
        <BottomRow />
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
      </section>
    </div>
  );
}

export default App;

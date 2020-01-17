import React, { useState } from "react";
import ScoreBoard from "./components/ScoreBoard";
import { initBoard } from "./components/baseball";

function App() {
  const [appState, setAppState] = useState({
    scoreboard: { ...initBoard },
    rpc: ""
  });

  const clearRPC = oldState => {
    const clone = { ...oldState };
    clone.rpc = "";
    setAppState(clone);
  };

  const action = name => {
    const clone = { ...appState };
    clone.rpc = name;
    setAppState(clone);
  };

  const strikeBtn = () => action("strike");
  const ballBtn = () => action("ball");
  const rotateBtn = () => action("rotate");
  const hitBtn = () => action("hit");
  const foulBtn = () => action("foul");

  return (
    <div className="App">
      <header className="App-header">
        <ScoreBoard
          home="Phillies"
          away="Cubs"
          state={appState}
          clr={clearRPC}
        />
      </header>
      <section className="Buttons">
        <button onClick={strikeBtn}>strike</button>
        <button onClick={ballBtn}>ball</button>
        <button onClick={foulBtn}>foul</button>
        <button onClick={rotateBtn}>rotate</button>
        <button onClick={hitBtn}>hit</button>
      </section>
    </div>
  );
}

export default App;

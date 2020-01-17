import React, { useState } from "react";
import ScoreBoard from "./components/ScoreBoard";
import { initBoard } from "./components/baseball";
// import "./App.css";

function App() {
  const [appState, setAppState] = useState({
    scoreboard: { ...initBoard },
    rpc: ""
  });

  const clearRPC = () => setAppState({ rpc: "" });

  const action = name => {
    const clone = { ...appState };
    clone.rpc = name;
    setAppState(clone);
  };

  const strikeBtn = () => action("strike");
  const ballBtn = () => action("ball");
  const rotateBtn = () => action("rotate");

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
      <button onClick={strikeBtn}>strike</button>
      <button onClick={ballBtn}>ball</button>
      <button onClick={rotateBtn}>rotate</button>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import PlayerSelectForm from "./PlayerSelectForm";
import ScoreSheet from "./ScoreSheet";

function App() {
  const [playerOneName, setPlayerOneName] = useState("");
  const [playerTwoName, setPlayerTwoName] = useState("");

  // const handleTextChangeP1 = (event) => {
  //   return setPlayerOneName(event.target.value);
  // };

  // const handleTextChangeP2 = (event) => {
  //   return setPlayerTwoName(event.target.value);
  // };

  // Hvis jeg vil sette navn direkte, uten submitknapp, kan jeg bruke disse funksjonene.

  const handleNameSubmit = (event) => {
    event.preventDefault();

    setPlayerOneName(document.getElementById("playerOneName").value);
    setPlayerTwoName(document.getElementById("playerTwoName").value);
  };

  return (
    <>
      <PlayerSelectForm
        // textChangeP2={handleTextChangeP2}
        // textChangeP1={handleTextChangeP1}
        nameSubmit={handleNameSubmit}
      />
      <ScoreSheet playerOneName={playerOneName} playerTwoName={playerTwoName} />
    </>
  );
}

export default App;

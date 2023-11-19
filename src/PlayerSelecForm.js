import React, { useState } from "react";

function PlayerSelectForm() {
  const [playerOneName, setPlayerOneName] = useState("");
  const [playerTwoName, setPlayerTwoName] = useState("");

  const handleTextChangeP1 = (event) => {
    return setPlayerOneName(event.target.value);
  };

  const handleTextChangeP2 = (event) => {
    return setPlayerTwoName(event.target.value);
  };

  return (
    <form className="">
      <input
        type="text"
        name="playerOneName"
        placeholder="Player One Name"
        value={playerOneName}
        onChange={handleTextChangeP1}
      />
      <input
        type="text"
        name="playerTwoName"
        placeholder="Player Two Name"
        value={playerTwoName}
        onChange={handleTextChangeP2}
      />
      <button type="submit" value="submit">
        Submit
      </button>
    </form>
  );
}

export default PlayerSelectForm;

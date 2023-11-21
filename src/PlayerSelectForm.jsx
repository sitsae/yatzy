import React, { useState } from "react";
import styles from "./PlayerSelectForm.module.css";

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
    <>
      <h3>Player names</h3>
      <form>
        <input
          type="text"
          name="playerOneName"
          placeholder="Player One Name"
          value={playerOneName}
          onChange={handleTextChangeP1}
          className={styles.player_input}
        />
        <input
          type="text"
          name="playerTwoName"
          placeholder="Player Two Name"
          value={playerTwoName}
          onChange={handleTextChangeP2}
          className={styles.player_input}
        />
        <button type="submit" value="submit">
          Submit
        </button>
      </form>
    </>
  );
}

export default PlayerSelectForm;

import React, { useState } from "react";
import styles from "./PlayerSelectForm.module.css";

function PlayerSelectForm({
  // textChangeP1,
  // textChangeP2,
  // playerOneName,
  // playerTwoName,   (trenger ikke disse, men lar de staa for aa poengtere netopp det for meg selv)
  nameSubmit
}) {
  return (
    <section>
      <h3>Player names</h3>

      <form onSubmit={nameSubmit}>
        <input
          type="text"
          id="playerOneName"
          placeholder="Player One Name"
          // value={playerOneName}
          // onChange={textChangeP1}
          className={styles.player_input}
        />
        <input
          type="text"
          id="playerTwoName"
          placeholder="Player Two Name"
          // value={playerTwoName}
          // onChange={textChangeP2}
          className={styles.player_input}
        />
        <button type="submit" value="submit">
          Submit
        </button>
      </form>
    </section>
  );
}

export default PlayerSelectForm;

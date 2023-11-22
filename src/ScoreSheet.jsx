import React from "react";
import styles from "./ScoreSheet.module.css";

export default function ScoreSheet({ styles, playerOneName, playerTwoName }) {
  return (
    <section>
      <table>
        <thead>
          <tr>
            <th>Names</th>
            <th id="player-one-name">{playerOneName}</th>
            <th id="player-two-name">{playerTwoName}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Ones</th>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th>Twoes</th>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th>Threes</th>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th>Fours</th>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th>Fives</th>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th>Sixes</th>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th></th>
            <th id="bonus" colspan="2">
              Bonus
            </th>
          </tr>
          <tr>
            <th id="sum">Sum</th>
            <th></th>
            <th></th>
          </tr>
          <tr>
            <th id="one-pair">One pair</th>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th id="two-pairs">Two pairs</th>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th id="three-pairs">Three pairs</th>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th id="three-of-a-kind">Three of a kind</th>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th id="four-of-a-kind">Four of a kind</th>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th id="five-of-a-kind">Five of a kind</th>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th id="small-straight">Small straight</th>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th id="big-straight">Big straight</th>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th id="full-straight">Full straight</th>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th id="full-house">Full house</th>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th id="villa">Villa</th>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th id="tower">Tower</th>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th id="chance">Chance</th>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <th id="maxi-yatzy">
              <b>Maxy yatzy</b>
            </th>
            <th></th>
            <th></th>
          </tr>
          <tr>
            <th></th>
            <th>Sum P1</th>
            <th>Sum P1</th>
          </tr>
          <tr>
            <th></th>
            <th id="sum-p1"></th>
            <th id="sum-p2"></th>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

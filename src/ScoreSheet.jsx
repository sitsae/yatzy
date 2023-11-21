import React from "react";

export default function ScoreSheet() {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Names</th>
            <th>{'"Navn"'}</th>
            <th>{'"Navn"'}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th style={{ borderBottom: "1px solid black" }}>Ones</th>
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
        </tbody>
      </table>
    </>
  );
}

const assert = require("assert");

import Player from "./player";

const player = new Player("player");

describe("Player", () => {
  afterEach(() => {
    player._diceArray = [];
    player._roundScore = 0;
    player._totalScore = 0;
  });
  describe("throwDice", () => {
    it("returns an array of 6 nums", () => {
      const expectedResult = 6;

      const outputArr = player.throwDice();

      const result = outputArr.length;

      assert.strictEqual(result, expectedResult);
    });
    it("throws only 3 dices if diceArray has 3 dices in it", () => {
      player._diceArray = [6, 6, 6];
      const expectedResult = 3;

      const outputArr = player.throwDice();

      const result = outputArr.length;

      assert.strictEqual(result, expectedResult);
    });
    it("If diceArray contains 6 dices, you will get message to submit or choose dices to throw", () => {
      player._diceArray = [6, 6, 6, 6, 6, 6];

      const expectedResult =
        "Du har ikke flere terninger å kaste. Vennligst legg til terninger som resultat eller ta ut terningene du vil kaste på nytt. ";

      const result = player.throwDice();

      assert.equal(result, expectedResult);
    });
  });

  describe("pushCoosenDices", () => {
    it("pushes dices to diceArray", () => {
      player.pushChoosenDices([3, 4, 4, 6]);
      const expectedResult = [3, 4, 4, 6];

      const result = player.diceArray;

      assert.deepStrictEqual(result, expectedResult);
    });

    it("returns error msg when you try to push so that diceArr.lenght > 6", () => {
      player._diceArray = [3, 4, 5, 6];
      const expectedResult =
        "For mange terninger er valgt, vennligst fjern 1 valg";

      const result = player.pushChoosenDices([3, 2, 1]);

      assert.equal(result, expectedResult);
    });
  });
  describe("returnRoundTotal", () => {
    it("roundScore shows the total score of the dices in diceArray", () => {
      player._diceArray = [5, 5, 5, 5, 5, 5];
      const expectedResult = 30;

      player.returnRoundTotal();

      const result = player.roundScore;

      assert.strictEqual(result, expectedResult);
    });
  });
  describe("addToTotalScore", () => {
    it("adds score to totalScore from roundScore", () => {
      player._totalScore = 15;
      player._roundScore = 32;

      const expectedResult = 47;

      player.addToToalScore();

      const result = player.totalScore;

      assert.strictEqual(result, expectedResult);
    });
  });
});

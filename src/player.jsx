class Player {
  constructor(name) {
    this._name = name;
    this._numThrows = 0;
    this._roundScore = 0;
    this._totalScore = 0;
    this._diceArray = [];
  }

  get name() {
    return this._name;
  }
  get numThrows() {
    return this._numThrows;
  }
  get roundScore() {
    return this._roundScore;
  }
  get diceArray() {
    return this._diceArray;
  }

  get totalScore() {
    return this._totalScore;
  }

  set diceArray(arr) {
    this._diceArray = arr;
  }

  addToToalScore() {
    this._totalScore += this._roundScore;
  }

  // kaster så mange terninger som trengs for å fylle diceArr med 6 terninger.
  throwDice() {
    const thisThrow = [];
    let numDicesToThrow = 6 - this._diceArray.length;

    if (numDicesToThrow === 0) {
      return "Du har ikke flere terninger å kaste. Vennligst legg til terninger som resultat eller ta ut terningene du vil kaste på nytt. ";
    } else {
      for (let i = 0; i < numDicesToThrow; i++) {
        thisThrow.push(Math.floor(Math.random() * 7));
      }
      this._numThrows ++;
      return thisThrow;
    }
    // denne maa inneholde metode for aa legge til kast i kastteller og unngaa at spiller kaster mer enn tre ganger.
  }

  // for aa velge terninger fra throwDice til diceArr
  pushChoosenDices(chosenDices) {
    if (chosenDices.length + this._diceArray.length > 6) {
      return `For mange terninger er valgt, vennligst fjern ${
        chosenDices.length + this._diceArray.length - 6
      } valg`;
    }
    for (let dice of chosenDices) {
      this._diceArray.push(dice);
    }
  }

  rethrowDices() {
    // kunne velge ut terninger som man vil kaste paa nytt fra diceArr
  }

  returnRoundTotal() {
    const total = this.diceArray.reduce((previous, next) => previous + next);
    this._roundScore = total;
  }
}

export default Player;

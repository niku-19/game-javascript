"use strict";
let diceEl = document.querySelector(".dice");
let newButton = document.querySelector(".btn--roll");
let newGame = document.querySelector(".btn--new");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");
const score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");
const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
const buttonHold = document.querySelector(".btn--hold");
console.log(player0El);
let currentScore = 0;
const pScore = [0, 0];
let activerPlayer = 0;
let switchPlayer = function () {
  document.getElementById(`current--${activerPlayer}`).textContent = 0;
  currentScore = 0;
  activerPlayer = activerPlayer === 0 ? 1 : 0;
  player0El.classList.toggle("player--active");
  player1El.classList.toggle("player--active");
};
let playing = true;

document.getElementById("score--0").textContent = 0;
document.getElementById("score--1").textContent = 0;
diceEl.classList.add("hidden");

newButton.addEventListener("click", function () {
  if (playing) {
    let numb = Math.floor(Math.random() * 6 + 1);
    diceEl.classList.remove("hidden");
    diceEl.src = `dice-${numb}.png`;
    if (numb !== 1) {
      currentScore += numb;
      document.getElementById(`current--${activerPlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

buttonHold.addEventListener("click", function () {
  if (playing) {
    pScore[activerPlayer] += currentScore;
    document.getElementById(`score--${activerPlayer}`).textContent =
      pScore[activerPlayer];
    console.log(pScore);
    //finish the game
    if (pScore[activerPlayer] >= 50) {
      playing = false;
      diceEl.classList.add("hidden");
      document
        .querySelector(`.player--${activerPlayer}`)
        .classList.add("player--winner");
      document
        .querySelector(`.player--${activerPlayer}`)
        .classList.remove("player--active");
    }

    switchPlayer();
  }
});

newGame.addEventListener("click", function () {
  diceEl.classList.add("hidden");
  current0El.textContent = 0;
  current1El.textContent = 0;
  score0El.textContent = 0;
  score1El.textContent = 0;
  player0El.classList.remove('player--winner')
  player1El.classList.remove('player--winner')
  player0El.classList.add("player--active");
  player1El.classList.remove("player--active");
});

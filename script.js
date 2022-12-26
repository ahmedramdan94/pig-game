'use strict';
//selecting element
let player0 = document.querySelector('.player--0');
let player1 = document.querySelector('.player--1');
let score0El = document.querySelector('#score--0');
let score1El = document.querySelector('#score--1');
let current0El = document.getElementById('current--0');
let current1El = document.getElementById('current--1');

let dicePic = document.querySelector('.dice');
const diceBtn = document.querySelector('.btn--roll');
const newGameeBtn = document.querySelector('.btn--new');
const holdBtn = document.querySelector('.btn--hold');

// stsrting condtions

let currentScore, activePlayer, scores, playing;
const int = function () {
  currentScore = 0;
  activePlayer = 0;
  scores = [0, 0];
  playing = true;
  //
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.textContent = 0;
  current1El.textContent = 0;
  //
  dicePic.classList.add('hidden');
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
};
int();
//switching player func
const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};
//rolling function
diceBtn.addEventListener('click', function () {
  // dice random number
  if (playing) {
    let diceNum = Math.trunc(Math.random() * 6) + 1;
    // display dice pic
    dicePic.classList.remove('hidden');
    dicePic.src = `dice-${diceNum}.png`;
    //switching playing check dice 1 is true or not
    if (diceNum !== 1) {
      currentScore += diceNum;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});
//when click hold
holdBtn.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //check if score less or equal 100
    if (scores[activePlayer] >= 20) {
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      //switching player
      switchPlayer();
    }
  }
});
newGameeBtn.addEventListener('click', int);

const options = document.querySelectorAll('.option');
const playerScoreElem = document.querySelector('.player-score');
const computerScoreElem = document.querySelector('computer-score');
const resultElem = document.querySelector('#result');
const resetBtn = document.querySelector('#reset');
const movesElem = document.querySelector('#moves');
const computerChoiceElem = document.querySelector('#computer-choice');

const choice = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;
let moves = 10;

//  function for computer to make random option  //
function computerPlay() {
    const choiceIndex = Math.floor(Math.random() * choice.length);
    return choices[choiceIndex];
}
const moves = document.querySelector('.moves-left');
moves++;
movesLeft.innerText = `Moves Left: ${10 - moves}`;

if (moves == 10) {
    gameOver(playerOptions, movesLeft);

//  function to display result  //
function updateScore(playerChoice, computerChoice) {
    if (playerChoice) {
        computerChoiceElem.innerHTML = 'computer choose: ${computerChoice}.';
        if (playerChoice === computerChoice) {
            resultElem.innerHTML = "It's a tie!";
        } else if (
            (playerChoice === 'rock' && computerChoice === 'scissors') ||
            (playerChoice === 'paper' && computerChoice === 'rock') ||
            (playerChoice === 'scissors' && computerChoice === 'paper')
        ) {
            resultElem.innerHTML = 'You win!';
            playerScore++;
            playerScoreElem.innerHTML = 'player: ${playerScore}';
        } else {
            resultElem.innerHTML = 'Computer Wins!';
            computerScore++;
            computerChoiceElem.innerHTML = 'Computer: ${computerScore}';
        }
    }
}
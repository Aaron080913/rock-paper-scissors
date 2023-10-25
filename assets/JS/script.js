const options = document.querySelectorAll('.option');
const playerScoreElem = document.querySelector('.player-score');
const computerScoreElem = document.querySelector('computer-score');
const resultElem = document.querySelector('#result');
const resetBtn = document.querySelector('#reset');
const moveElem = document.querySelector('#moves-left');
const computerChoiceElem = document.querySelector('#computer-choice');

const weapons = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;
let moves = 0;

//  function for computer to make random option  //
function computerPlay() {
    const weaponIndex = Math.floor(Math.random() * weapons.length);
    return weapons[weaponIndex];
}
//  function to display result  //
function updateScore(playerWeapon, computerWeapon) {
    if (playerWeapon) {
        computerOptionElem.innerHTML = `Computer choose: ${computerWeapon}.`;
        if (playerWeapon === computerWeapon) {
            resultElem.innerHTML = "It's a tie!";
        } else if (
            (playerWeapon === 'rock' && computerWeapon === 'scissors') ||
            (playerWeapon === 'paper' && computerWeapon === 'rock') ||
            (playerWeapon === 'scissors' && computerWeapon === 'paper')
        ) {
            resultElem.innerHTML = 'You win!';
            playerScore++;
            playerScoreElem.innerHTML = `player: ${playerScore}`;
        } else {
            resultElem.innerHTML = 'Computer Wins!';
            computerScore++;
            computerChoiceElem.innerHTML = `Computer: ${computerScore}`;
        }
        if (playerScore > computerScore) {
            resultElem.textContent = 'You Win!';
            resultElem.style.color = 'green';
            computerChoiceElem.innerHTML = 'Game Over!'
            disableOptions();
        }
        if (playerScore < computerScore) {
            resultElem.textContent = 'You Lose!';
            resultElem.style.color = 'red';
            computerChoiceElem.innerHTML = 'Game Over';
            disableOptions();
        }
        else {
            result.style.fontSize = '2rem';
            result.innerText = 'Tie';
            result.style.color = 'grey';
        } 
        function selectWeapon(){
            moveElem.innerHTML = '10';
            const playerWeapon = this.id;
            const computerWeapon = computerPlay();
            updateScore(playerWeapon, computerWeapon);
        }
        function resetGame() {
            playerScore = 0;
            computerScore = 0;
            moves = 10;
            playerScoreElem.innerHTML = 'player: 0';
            computerScoreElem.innerHTML = 'computer: 0';
            resultElem.innerHTML = 'Make your choice!';
            moveElem.innerHTML = '10';
            computerChoiceElem.innerHTML = '';
            enableOptions();
        }
        function disableOptions() {
            choices.forEach((choice) => {
                choice.style.pointerEvents = 'none';
            });
        }
        function enableOptions() {
            choices.forEach((choice) => {
                choice.style.pointerEvents = 'none';
            });
        }
        choices.forEach((choice) => choice.addEventListener('click', selectWeapon));
        resetBtn.addEventListener('click', resetGame);
    }
}
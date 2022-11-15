

// get computers play
function getComputersChoice() {
    const playOptions = ['rock', 'paper', 'scissors'];
    return playOptions[Math.floor(Math.random() * 3)];
}
const compChoice = () =>
// get players play

function getPlayersChoice() {
    let playerSelection = '';
    let moveValidated = false;
    do {
        playerSelection = prompt('Choose rock, paper, or scissors:');
        playerSelection.toLowerCase();
        if (playerSelection === 'y') {
            break;
        }
        if (playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors'){
            moveValidated = true;
        }
        else {
            console.log('Want to quit? Type "Y" to quit, or please enter a valid move to play!')
        }
    } while (!moveValidated);
    return playerSelection;
}

function playRound(playerSelection, computerSelection) {
    let playerWin = false;
    if (playerSelection === computerSelection) {
        return `Both players chose ${playerSelection}! Tie game!`;
    }
    else {
        if (playerSelection === 'rock') {
            if (computerSelection === 'scissors') {
                playerWin = true;
            }
        }
        else if (playerSelection === 'paper') {
            if (computerSelection === 'rock') {
                playerWin = true;
            }
        }
        else if (playerSelection === 'scissors') {
            if (computerSelection === 'paper') {
                playerWin = true;
            }
        }
    }
    return playerWin ? `${playerSelection} beats ${computerSelection}! You Win!` :
        `${computerSelection} beats ${playerSelection}. Sorry, you lose.`;
}

function game() {
    this.playerScore = 0;
    this.computerScore = 0;
}
console.log(getComputersChoice())
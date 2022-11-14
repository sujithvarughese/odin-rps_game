

// get computers play
function getComputersChoice() {
    const playOptions = ['rock', 'paper', 'scissors'];
    return playOptions[Math.floor(Math.random() * 3)];
}

// get players play
function getPlayersChoice() {
    let playerSelection = '';
    let moveValidated = false;
    do {
        playerSelection = prompt('Enter Move:');
        playerSelection.toLowerCase();
        if (playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors'){
            moveValidated = true;
        }
    } while (!moveValidated);
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return `Both players chose ${playerSelection}! Tie game!`
    }
    let playerWin = false;
    else {
        if (playerSelection === 'rock') {
            if (computerSelection === 'scissors') {
                playerWin = true;
            }
        }
        if (playerSelection === 'paper') {
            if (computerSelection === 'rock') {
                playerWin = true;
            }
        }
        if (playerSelection === 'scissors') {
            if (computerSelection === 'paper') {
                playerWin = true;
            }
        }
    }
    return playerWin ? `${playerSelection} beats ${computerSelection}! You Win!` :
        `${computerSelection} beats ${playerSelection}. Sorry, you lose.`;
}



console.log(getComputersChoice())
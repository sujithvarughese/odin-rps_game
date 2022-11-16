

// get computers play
function getComputersChoice() {
    const playOptions = ['rock', 'paper', 'scissors'];
    return playOptions[Math.floor(Math.random() * 3)];
}

function getPlayersChoice() {
    let playerSelection = '';
    /*let moveValidated = false;
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
    */
    playerSelection = 'rock';
    return playerSelection;
}

function playRound(playerSelection, computerSelection) {
    const rock = document.getElementById('rock-btn');
    rock.addEventListener('click', () => {
        alert('Rock!');
    });
    const paper = document.getElementById('paper-btn');
    paper.addEventListener('click', () => {
        alert('Paper!');
    });
    const scissors = document.getElementById('scissors-btn');
    scissors.addEventListener('click', () => {
        alert('Scissors!');
    });


    let scoreUpdate = -1;
    if (playerSelection === computerSelection) {
        return `Both players chose ${playerSelection}! Tie game!`;
    }
    else {
        if (playerSelection === 'rock') {
            if (computerSelection === 'scissors') {
                scoreUpdate = 1;
            }
        }
        else if (playerSelection === 'paper') {
            if (computerSelection === 'rock') {
                scoreUpdate = 1;
            }
        }
        else if (playerSelection === 'scissors') {
            if (computerSelection === 'paper') {
                scoreUpdate = 1;
            }
        }
    }

    // send scoreUpdate to score object's function to keep track of score
    score.updateScore(scoreUpdate);

    return scoreUpdate > 0 ? `${playerSelection} beats ${computerSelection}! You Win!` :
        `${computerSelection} beats ${playerSelection}. Sorry, you lose.`;
}
function game() {
    //set up new round
    let gameOver = false;


    console.log(playRound(getPlayersChoice(), getComputersChoice()));
    console.log(score.getScore());

    let pointsToWin = 9999;

    // when player or computer gets 5 wins, end the game and display winner to the user
    if (score.player >= pointsToWin) {
        console.log("Congratulations! You Win!");
        gameOver = true;
    }
    else if (score.computer >= pointsToWin) {
        console.log("You Lose. Practice and come back.");
        gameOver = true;
    }
}
// score object to keep track of score with built-in function to update or return score
const score = {
    player: 0,
    computer: 0,
    updateScore: function(result) {
        if (result === 1) {
            this.player += 1;
        } else if (result === -1) {
            this.computer += 1;
        }
    },
    getScore: function (pointsToWin = 1000) {

        return [this.player, this.computer];
    }
}

const start = document.getElementById('start-btn');
start.addEventListener('click', () => {
    alert('Starting Game...');
});


game();
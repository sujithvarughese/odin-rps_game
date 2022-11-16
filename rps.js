let scoreEl = document.getElementById("score-el");

    // fix global variable
let playerTurn = false;

function displayMessage(element, newMessage) {
    element.textContent = newMessage;
}

    // get computers move
function getComputersChoice() {
        // array w/ 3 elements and randomly choose
    const possibleMoves = ['Rock', 'Paper', 'Scissors'];
    return possibleMoves[Math.floor(Math.random() * 3)];
}

// get users move using GUI
function getPlayersChoice() {
    let playerSelection = '';
    let rock = document.getElementById("rock-btn");
    let paper = document.getElementById("paper-btn");
    let scissors = document.getElementById("scissors-btn");

//FIX: add function to wait to user to click on a move

    rock.addEventListener('click', () => {
        playerSelection = 'Rock';
        alert('Rock!');

    });
    paper.addEventListener('click', () => {
        playerSelection = 'Paper';
        alert('Paper!');

    });
    scissors.addEventListener('click', () => {
        playerSelection = 'Scissors';
        alert('Scissors!');
    });
    return playerSelection;
}

    // only for console use
function getPlayersChoicePrompt() {
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
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    return playerSelection;
}
    // game() will call playRound() upon start and after each round until winner is declared
function playRound (playerSelection, computerSelection) {
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

    // score object to keep track of score with built-in function to update or return score
const score = {
    player: 0,
    computer: 0,

        // called after each round, if sent 1 then player score++, else if sent -1 then computer score++
    updateScore: function(result) {
        if (result === 1) {
            this.player += 1;
        } else if (result === -1) {
            this.computer += 1;
        }
    },

    getScore: function (pointsToWin = 1000) {
        return [this.player, this.computer];
    },

    printScore: function() {
        return `Player: ${this.player}\tComputer: ${this.computer}`;
    }
}

function game(scoreToWin = 5) {
        // bool will be changed to true once scoreToWin has been reached and game should end
    let gameOver = false;
    while (gameOver === false) {
        let scoreEl = document.getElementById("score-el");
        let playerChoice = getPlayersChoicePrompt();
        let computerChoice = getComputersChoice();

        // returns a string with player moves and outcome, and display it to the user
        messageEl.textContent = playRound(playerChoice, computerChoice);
        // display the score to the user
        scoreEl.textContent = score.printScore();

        // when player or computer gets 5 wins, end the game and display winner to the user
        if (score.player >= scoreToWin) {
            console.log("Congratulations! You Win!");
            gameOver = true;
        } else if (score.computer >= scoreToWin) {
            console.log("You Lose. Practice and come back.");
            gameOver = true;
        }
    }
}




    // display welcome message
const messageEl = document.getElementById("message-el");
displayMessage(messageEl, 'Welcome to Rock, Paper, Scissors! Press Start Game when Ready!');

    // wait for user to click start game
const start = document.getElementById('start-btn');
start.addEventListener('click', () => {
    displayMessage(messageEl, 'Good Luck!');
    game();
});



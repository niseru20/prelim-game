let playerScore = 0;
let computerScore = 0;
const winningScore = 5;

// Play the game
function playGame(playerChoice) {
    if (playerScore >= winningScore || computerScore >= winningScore) {
        return;
    }

    const computerChoice = getComputerChoice();
    const result = determineWinner(playerChoice, computerChoice);

    // Update the score based on the result
    if (result === 'player') {
        playerScore++;
        document.getElementById('result').textContent = `You win! ${capitalize(playerChoice)} beats ${computerChoice}.`;
    } else if (result === 'computer') {
        computerScore++;
        document.getElementById('result').textContent = `Computer wins! ${capitalize(computerChoice)} beats ${playerChoice}.`;
    } else {
        document.getElementById('result').textContent = `It's a tie! You both chose ${playerChoice}.`;
    }

    // Update the scoreboard
    document.getElementById('player-score').textContent = `Player 1: ${playerScore}`;
    document.getElementById('computer-score').textContent = `Computer: ${computerScore}`;

    // Check if someone won
    checkWinner();
}

// Generate computer's choice
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

// Determine the winner
function determineWinner(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return 'tie';
    }

    if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'player';
    } else {
        return 'computer';
    }
}

// Capitalize first letter of choice for result display
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

// Check if someone has won the game
function checkWinner() {
    if (playerScore === winningScore) {
        document.getElementById('result').textContent = "Congratulations! Player 1 wins the game!";
        showResetButton();
    } else if (computerScore === winningScore) {
        document.getElementById('result').textContent = "Oh no! The computer wins the game!";
        showResetButton();
    }
}

// Show the reset button when the game ends
function showResetButton() {
    document.getElementById('reset-btn').style.display = 'block';
}

// Reset the game
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    document.getElementById('player-score').textContent = `Player 1: ${playerScore}`;
    document.getElementById('computer-score').textContent = `Computer: ${computerScore}`;
    document.getElementById('result').textContent = "Make your choice!";
    document.getElementById('reset-btn').style.display = 'none';
}

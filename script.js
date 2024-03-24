/*
ROCK PAPER SCISSORS GAME
2024-03-04
RagingD0nkey
*/


// Initialize global var : number of rounds, both score

let gameRound = 0;
let playerScore =0;
let computerScore =0;
const numberRounds = 5;

// Get computer choice via a pseudo-random allocation

function getComputerChoice() {
    let tempCompChoice = Math.floor(Math.random() * 3);

    switch (tempCompChoice) {
        case 0:
            return "ROCK";
        case 1:
            return "PAPER";
        case 2:
            return "SCISSORS";

      }
}

// Get player choice via prompt - the first letter of the choice "R" for "Rock" for example is also accepted

function getPlayerChoice() {
    let tempPlayerChoice = String(prompt("Please enter your choice : [Rock], [Paper] or [Scissors]")).toUpperCase();
    
    if ((tempPlayerChoice ==="ROCK") || (tempPlayerChoice ==="PAPER") || (tempPlayerChoice ==="SCISSORS")) {
        return tempPlayerChoice;
    }
    else if ((tempPlayerChoice ==="R") || (tempPlayerChoice ==="P") || (tempPlayerChoice ==="S")){
        switch (tempPlayerChoice) {
            case "R":
                return "ROCK";
            case "P":
                return "PAPER";
            case "S":
                return "SCISSORS";
        }
    }
    else {
        alert("Only valid choices are [Rock], [Paper], [Scissors] or [R], [P], [S]");
        return getPlayerChoice();
    }
}

// Compare player to computer choice. Keep track of score

function playRound(playerChoice, computerChoice) {
    
    if (playerChoice===computerChoice) {
        return "Tie !"
    }

    switch (playerChoice) {
        case "ROCK":
            if (computerChoice==="PAPER") {
                computerScore++;
                return "Player Loses!"
            }
            else if (computerChoice==="SCISSORS") {
                playerScore++;
                return "Player Wins!"
            }
        case "PAPER":
            if (computerChoice==="SCISSORS") {
                computerScore++;
                return "Player Loses!"
            }
            else if (computerChoice==="ROCK") {
                playerScore++;
                return "Player Wins!"
            }
        case "SCISSORS":
            if (computerChoice==="ROCK") {
                computerScore++;
                return "Player Loses!"
            }
            else if (computerChoice==="PAPER") {
                playerScore++;
                return "Player Wins!"
            }

      }
}

// Main function - encompassing player & computer choices and game rounds
function playGame() {
    let playerChoice = getPlayerChoice();
    let computerChoice = getComputerChoice();
    console.log("Computer choice is " + computerChoice);
    console.log("Player choice is " + playerChoice);
    console.log(playRound(playerChoice, computerChoice));
    console.log("Computer : " + computerScore + " | Player : " + playerScore);
}



for (i=0;i<numberRounds;i++) {
    playGame();
}

// Display winner and final scores

let finalScore = (computerScore,playerScore) => {
    if (computerScore==playerScore) {
        return "It's a TIE!";
    }
    else if (computerScore > playerScore) {
        return "Computer WINS!";
    }
    else {
        return "Player WINS!";
    }
};

alert (`Final score is : Computer ${computerScore} vs Player ${playerScore} ! \n 
        ${finalScore(computerScore,playerScore)}`)

let gameRound = 0;
let playerScore =0;
let computerScore =0;

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


// Get player choice via buttons

const playerChoice = document.querySelector(".player-choice");

playerChoice.addEventListener("click", function(e){
    if (e.target.id!=="") {
        playRound(e.target.textContent,getComputerChoice());
    }
})

// Compare player to computer choice. Keep track of score

function playRound(playerChoice, computerChoice) {

    let resultsDisplay = document.querySelector(".results");
    let playerScoreDisplay = document.querySelector(".player-score");
    let computerScoreDisplay = document.querySelector(".computer-score");


    console.log(computerScore + " " + computerChoice);
    console.log(playerScore + " " + playerChoice);

    if (playerChoice===computerChoice) {
        resultsDisplay.textContent = "Tie !"
    }
    switch (playerChoice) {
        case "ROCK":
            if (computerChoice==="PAPER") {
                computerScore++;
                computerScoreDisplay.textContent = computerScore;
                resultsDisplay.textContent = "Player Loses!"
            }
            else if (computerChoice==="SCISSORS") {
                playerScore++;
                playerScoreDisplay.textContent = playerScore;
                resultsDisplay.textContent = "Player Wins!"
            }
            break;
        case "PAPER":
            if (computerChoice==="SCISSORS") {
                computerScore++;
                computerScoreDisplay.textContent = computerScore;
                resultsDisplay.textContent = "Player Loses!"
            }
            else if (computerChoice==="ROCK") {
                playerScore++;
                playerScoreDisplay.textContent = playerScore;
                resultsDisplay.textContent = "Player Wins!"
            }
            break;
        case "SCISSORS":
            if (computerChoice==="ROCK") {
                computerScore++;
                computerScoreDisplay.textContent = computerScore;
                resultsDisplay.textContent = "Player Loses!"
            }
            else if (computerChoice==="PAPER") {
                playerScore++;
                playerScoreDisplay.textContent = playerScore;
                resultsDisplay.textContent = "Player Wins!"
            }
            break;
      }
    console.log(computerScore + " " + computerChoice);
    console.log(playerScore + " " + playerChoice);
}


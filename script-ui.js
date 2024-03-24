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

const playerChoice = document.querySelector(".player-choice");

playerChoice.addEventListener("click", function(e){
    if (e.target.id!=="") {
        playRound(e.target.textContent,getComputerChoice());
    }
})

// Compare player to computer choice. Keep track of score

function playRound(playerChoice, computerChoice) {

    let resultsDisplay = document.querySelector(".results");
    console.log(resultsDisplay.className);
    if (playerChoice===computerChoice) {
        resultsDisplay.textContent = "Tie !"
    }
    switch (playerChoice) {
        case "ROCK":
            if (computerChoice==="PAPER") {
                computerScore++;
                resultsDisplay.textContent = "Player Loses!"
            }
            else if (computerChoice==="SCISSORS") {
                playerScore++;
                resultsDisplay.textContent = "Player Wins!"
            }
        case "PAPER":
            if (computerChoice==="SCISSORS") {
                computerScore++;
                resultsDisplay.textContent = "Player Loses!"
            }
            else if (computerChoice==="ROCK") {
                playerScore++;
                resultsDisplay.textContent = "Player Wins!"
            }
        case "SCISSORS":
            if (computerChoice==="ROCK") {
                computerScore++;
                resultsDisplay.textContent = "Player Loses!"
            }
            else if (computerChoice==="PAPER") {
                playerScore++;
                resultsDisplay.textContent = "Player Wins!"
            }

      }
}


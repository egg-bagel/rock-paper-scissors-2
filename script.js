let btns = document.querySelectorAll(".button");
let roundResult = document.querySelector("#roundResults");
let finalResult = document.querySelector("#finalResults");
let playerScore = document.querySelector("#playerScore");
let computerScore = document.querySelector("#computerScore");

btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        let playerChoice = e.target.innerText;
        playRound(playerChoice.toLowerCase(), getComputerChoice());
    })
});

function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];
    let choiceIndex = Math.floor(Math.random() * options.length);
    return options[choiceIndex];
}

function playRound(playerSelection, computerSelection) {
    if ((parseInt(playerScore.innerText) < 5) && (parseInt(computerScore.innerText) < 5)) {
        if (playerSelection == "rock") {
            if (computerSelection == "rock") {
                roundResult.innerText = "Computer chose Rock. It's a tie!";
            }
            else if (computerSelection == "paper") {
                roundResult.innerText = "Computer chose Paper. You lose!";
                computerScore.innerText = parseInt(computerScore.innerText) + 1;
                if ((parseInt(computerScore.innerText)) == 5) {
                    finalResult.innerText = "The computer wins the game!";
                }
            }
            else if (computerSelection == "scissors") {
                roundResult.innerText = "Computer chose Scissors. You win!";
                playerScore.innerText = parseInt(playerScore.innerText) + 1;
                if ((parseInt(playerScore.innerText)) == 5) {
                    finalResult.innerText = "You win the game!";
                }
            }    

        }
        else if (playerSelection == "paper") {
            if (computerSelection == "rock") {
                roundResult.innerText = "Computer chose Rock. You win!";
                playerScore.innerText = parseInt(playerScore.innerText) + 1;
                if ((parseInt(playerScore.innerText)) == 5) {
                    finalResult.innerText = "You win the game!";
                }
            }
            else if (computerSelection == "paper") {
                roundResult.innerText = "Computer chose Paper. It's a tie!";
            }
            else if (computerSelection == "scissors") {
                roundResult.innerText = "Computer chose Scissors. You lose!";
                computerScore.innerText = parseInt(computerScore.innerText) + 1;
                if ((parseInt(computerScore.innerText)) == 5) {
                    finalResult.innerText = "The computer wins the game!";
                }
            }
        }
        else if (playerSelection == "scissors") {
            if (computerSelection == "rock") {
                roundResult.innerText = "Computer chose Rock. You lose!";
                computerScore.innerText = parseInt(computerScore.innerText) + 1;
                if ((parseInt(computerScore.innerText)) == 5) {
                    finalResult.innerText = "The computer wins the game!";
                }
            }
            else if (computerSelection == "paper") {
                roundResult.innerText = "Computer chose Paper. You win!";
                playerScore.innerText = parseInt(playerScore.innerText) + 1;
                if ((parseInt(playerScore.innerText)) == 5) {
                    finalResult.innerText = "You win the game!";
                }
            }
            else if (computerSelection == "scissors") {
                roundResult.innerText = "Computer chose Scissors. It's a tie!";
            }
        }
    }
}

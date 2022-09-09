
// score-board counter
let p1Score = document.getElementById("player-counter");
let playerScore = 0; // player count variable
let comScore = document.getElementById("computer-counter");
let compScore = 0; //computer count variable 

//winner board
let theWinner = document.getElementById("winner");

//button choices
const rockButton = document.querySelector('#rockBtn');
const paperButton = document.querySelector("#paperBtn");
const scissorButton = document.querySelector("#scissorBtn");   
// Shows what options you and the computer chooses   
const userChoice = document.getElementById('user-choice');
const compChoice = document.getElementById('comp-choice');

// button functions
if (rockButton) {
    rockButton.addEventListener('click', () => {
        const playerSelection = "rock";
        let usersChoice = playerSelection;
        userChoice.innerHTML = usersChoice; 
        const computerSelection = computerPlay();
        let results = playRound(playerSelection, computerSelection);
        p1Score.innerHTML = playerScore;
        comScore.innerHTML = compScore;
        getResults(results);
    });
}
    
if (paperButton) {
    paperButton.addEventListener('click', () => {
        const playerSelection = "paper";
        let usersChoice = playerSelection;
        userChoice.innerHTML = usersChoice; 
        const computerSelection = computerPlay();
        let results = playRound(playerSelection, computerSelection);
        p1Score.innerHTML = playerScore;
        comScore.innerHTML = compScore;
        getResults(results);
    });
}
    
if (scissorButton) {
    scissorButton.addEventListener('click', () => {
        const playerSelection = "scissor";
        let usersChoice = playerSelection;
        userChoice.innerHTML = usersChoice; 
        const computerSelection = computerPlay();
        let results = playRound(playerSelection, computerSelection);
        p1Score.innerHTML = playerScore;
        comScore.innerHTML = compScore;
        getResults(results);
    });
}


// computers choice 
function computerPlay() {
    let computerPlay = Math.floor(Math.random()*3); // chooses from 0 - 2 
        if (computerPlay == 0) {
            computerPlay = "rock"; //rock = 0
        }
        else if (computerPlay == 1) { // 1 = paper
            computerPlay = "paper";
        }
        else {
            computerPlay = "scissor"; // 2 = scissors
        }
        compChoice.innerHTML = computerPlay
        return computerPlay // returns the result of what the option is 
}

// plays a round of rock, paper, scissor
function playRound(playerSelection, computerSelection) {
    // Choices if you pick rock //
    if (playerSelection == "rock") {
        if (computerSelection == "scissor") {
            playerScore++;
        }
    else if (computerSelection == "paper") {
        compScore++;
        }
    else if (computerSelection == "rock") {
        }
    }
    // Choices if paper //
    else if (playerSelection == "paper") {
        if (computerSelection == "scissor") {
            compScore ++;
        }
        else if (computerSelection == "rock") {
            playerScore ++;
        }
        else if (computerSelection == "paper") {
        }
    }
    // Choices if scissor //
    else if (playerSelection == "scissor") {
        if (computerSelection == "paper") {
            playerScore ++;
        }
        else if (computerSelection == "rock") {
            compScore ++;
        }
        else if (computerSelection == "scissor") {
        }
    }
} // inside add to the counter and use innerHTML to show (delete this when done)

// results after 5 rounds announces the winner
function getResults(results) {
    if (playerScore == 5) {
        document.querySelector('#rockBtn').disabled = true;
        document.querySelector("#paperBtn").disabled = true;
        document.querySelector("#scissorBtn").disabled = true;
        let winnerP1 = " Player";
        theWinner.innerHTML = winnerP1;
    } else if (compScore == 5) {
        document.querySelector('#rockBtn').disabled = true;
        document.querySelector("#paperBtn").disabled = true;
        document.querySelector("#scissorBtn").disabled = true;
        let winnerp2 = " Computer";
        theWinner.innerHTML = winnerp2;
    }
}
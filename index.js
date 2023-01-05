// create the choice string
const choices = ["Rock", "Paper", "Scissor"];


//Display palyer and PC choice
let playerCh = document.getElementById("yourChoice")
let pcCh = document.getElementById("pcChoice")
let winner = document.getElementById("winner")

//create variable to record results
let wins = 0;
let loses = 0;
let ties = 0;
let count = 0;

//create variable to store final result
let gameResult = document.getElementById("finalResult")

//create function to generate pc random choice
function randomChoice() {
    const random = Math.floor(Math.random()*choices.length);
    let pcChoice = choices[random];
    return pcChoice;
}

//create a function to decide who wins
function gameJudge(player, pc) {
    if(player === pc) {
        winner.innerText ="It's a tie!"
        ties++;
    } else if((player ==="Rock" && pc === "Scissor") || (player ==="Paper" && pc === "Rock") || (player ==="Scissor" && pc === "Paper")) {
        winner.innerText ="You win!"
        wins++;
    } else {
        winner.innerText ="You lose!"
        loses++;
    }
    count++;
}

// create user choice and listen the choice from the webpage when the buttons were clicked
let myChoice = "";

function setRock() {
    myChoice = "Rock";
    playerCh.innerText = "You choose " + myChoice;
    let pcChoice = randomChoice();
    pcCh.innerText = "Computer choose " + pcChoice;
    gameJudge(myChoice,pcChoice);
}

function setPaper() {
    myChoice = "Paper";
    playerCh.innerText = "You choose " + myChoice;
    let pcChoice = randomChoice();
    pcCh.innerText = "Computer choose " + pcChoice;
    gameJudge(myChoice,pcChoice);
}

function setScissor() {
    myChoice = "Scissor"
    playerCh.innerText = "You choose " + myChoice;
    let pcChoice = randomChoice();
    pcCh.innerText = "Computer choose " + pcChoice;
    gameJudge(myChoice,pcChoice);
}

// create a function show the final result
function showResult() {
    gameResult.innerText = "You've played " + count + " games, " + wins + " wins, " + loses + " loses" + ", and " + ties + " ties." 
}

function clearGame() {
    wins = 0;
    loses = 0;
    ties = 0;
    count = 0;
    gameResult.innerText ="";
}






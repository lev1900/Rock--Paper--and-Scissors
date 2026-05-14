 document.addEventListener('DOMContentLoaded', function () {
            var instructionsModal = new bootstrap.Modal(document.getElementById('instructionsModal'));
            instructionsModal.show();
        });


let choices=["Rock","Paper","Scissors"];
let computerChoice= choices[Math.floor(Math.random() * choices.length)];
console.log(computerChoice);

let playerChoice;

function playRound (playerChoice){
console.log("Playing Round" + playerChoice);
}

let rockBtn = document.getElementById("rock-btn");
rockBtn.addEventListener("Rock", playRound);

let scissorsBtn = document.getElementById("scissors-btn");
rockBtn.addEventListener("Scissors", playRound);

let paperBtn = document.getElementById("paper-btn");
rockBtn.addEventListener("Paper", playRound);


function determineWinner(playerChoice,computerChoice){
if (playerChoice===computerChoice){
    return "Tie!";
}
if(playerChoice==="Rock"){
    if(computerChoice="Paper"){
        return "Code won!";
    }else{
        return "You Won!";
    }
}

if(playerChoice==="Paper"){
    if(computerChoice==="Scissors"){
        return "Code Won!";
    }else{
        return "You Won!";
    }
}

if(playerChoice==="Scissors"){
    if(computerChoice==="Rock"){
    return "Code Won!";
    }else{
        return "You Won!";
    }
}
}
determineWinner();


function updateScore(roundResult){
if(playersScore > computerScore){
    console.log("Player won");
    document.getElementById("player-win").innerHTML;
}else{
    console.log("Computer Won");
    document.getElementById("computer-won").innerHTML;
}
if(playerScore===computerScore){
    console.log("tie");
}
}
updateScore();


function  updateDisplay(){

}
updateDisplay();


function resetGame(){

}
resetGame();
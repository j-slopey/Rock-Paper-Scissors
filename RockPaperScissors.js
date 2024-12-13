let randint = (range) => Math.floor(Math.random() * range);

function computerChoice(){
    let choice;
    switch(randint(3)){
        case 0:
            choice = "Rock";
            break;
        case 1:
            choice = "Paper";
            break;
        case 2:
            choice = "Scissors";
            break;
    }
    updateCpuChoice(choice)
    return choice.toLowerCase();
}

function updateCpuChoice( text ){
    const choiceDisplay = document.querySelector("#computerChoice");
    choiceDisplay.textContent = text;
}

function updateScoreBoard() {
    const userScoreBoard = document.querySelector("#userScore");
    const cpuScoreBoard = document.querySelector("#cpuScore");
    userScoreBoard.textContent = "Your Score: " + userScore;
    cpuScoreBoard.textContent = "CPU Score: " + cpuScore;
    if(userScore === 5){
        alert("You are the first to win 5 games. You Win!")
    } else if(cpuScore === 5) {
        alert("The CPU beat you to 5 wins. You Lost!")
    }
}

function setResult( resultText ){
    const resultTextBox = document.querySelector("#result");
    resultTextBox.textContent = resultText;
}

function playGame(user){
    let cpu = computerChoice();
    if(cpu === user){
        setResult("Tie!")
    }else{
        switch(user){
            case "rock":
                if(cpu === "scissors"){
                    setResult("You Win!")
                    userScore += 1;
                } else {
                    setResult("You Lose!")
                    cpuScore += 1;
                }
                break;
            case "paper":
                if(cpu === "rock"){
                    setResult("You Win!")
                    userScore += 1;
                } else {
                    setResult("You Lose!")
                    cpuScore += 1;
                }
                break;
            case "scissors":
                if(cpu === "paper"){
                    setResult("You Win!")
                    userScore += 1;
                } else {
                    setResult("You Lose!")
                    cpuScore += 1;
                }
                break;
        }
    }
    updateScoreBoard();
}

let userScore = 0;
let cpuScore = 0;
let gamesPlayed = 0;

const userChoiceButtons = document.querySelectorAll(".userChoice");
userChoiceButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
        playGame(e.target.textContent.toLowerCase());
    });
})

const resetButton = document.querySelector("#reset");
resetButton.addEventListener("click", () => {
   cpuScore = 0;
   userScore = 0;
   updateScoreBoard();
   updateCpuChoice('-');
   setResult('');
});


console.log("After " + gamesPlayed + " games, your score is " + userScore + " and the CPU's score is " + cpuScore);


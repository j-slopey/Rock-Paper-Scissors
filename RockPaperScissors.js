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
    console.log("The Computer Chose " + choice);
    return choice.toLowerCase();
}

function userChoice(){
    let choice = window.prompt("Rock, Paper, or Scissors?", "Make a choice");
    console.log("You Picked " + choice);
    return choice.toLowerCase();
}

function playGame(){
    let cpu = computerChoice();
    let user = userChoice();
    if(cpu === user){
        console.log("Tie");
    }else{
        switch(user){
            case "rock":
                if(cpu === "scissors"){
                    console.log("You Win!");
                    userScore += 1;
                } else {
                    console.log("You Loose!");
                    cpuScore += 1;
                }
                break;
            case "paper":
                if(cpu === "rock"){
                    console.log("You Win!");
                    userScore += 1;
                } else {
                    console.log("You Loose!");
                    cpuScore += 1;
                }
                break;
            case "scissors":
                if(cpu === "paper"){
                    console.log("You Win!");
                    userScore += 1;
                } else {
                    console.log("You Lose!");
                    cpuScore += 1;
                }
                break;
        }
    }
}

let userScore = 0;
let cpuScore = 0;
let gamesPlayed;
for (gamesPlayed = 0; gamesPlayed< 5; gamesPlayed++){
    playGame();
}

console.log("After " + gamesPlayed + " games, your score is " + userScore + " and the CPU's score is " + cpuScore);


let userScore = 0;
let computerScore = 0;



//Write a function called 'playRound()' that will play a single round of 'Rock Paper Scissors'.
let playRound = (playerSelection) => {

    //define nodes for displaying results
    let currentRound = document.querySelector("#currentRound");
    let runningScore = document.querySelector("#runningScore");
    let endScore = document.querySelector("#endScore");
    let intructions = document.querySelector("#instructions");
    let finalResult;

    //remove instructions
    instructions.classList.add("hidden");
    endScore.classList.add("hidden");
    currentRound.classList.remove("hidden");
    runningScore.classList.remove("hidden");
    
    
    //if starting another round after someone has reached the final score of 5, remove endScore text
    if (userScore == 0 && computerScore == 0){
        endScore.innerText = "";
    }

    //Randomly assign the computers selection
    //by generating a number between 1 and 3 
    let computerSelection = Math.floor(Math.random()*3 + 1);

    //and assign 'Rock', 'Paper', or 'Scissors' equivalent to possible numerical results
    switch (computerSelection){

        case 1:
            computerSelection = "Rock";
            break;
        
        case 2: 
            computerSelection = "Paper";
            break;

        case 3:
            computerSelection = "Scissors";
            break;

    }

    //Determine if the player won and change the result nodes to reflect
    let result;

    if (playerSelection === "Rock" && computerSelection === "Scissors" || 
        playerSelection === "Scissors" && computerSelection === "Paper" ||
        playerSelection === "Paper" && computerSelection === "Rock"){

        result = "win";

        userScore++;
        
        currentRound.textContent = `You ${result} this round! ${playerSelection} beats ${computerSelection}.`

        
    } else if (playerSelection === computerSelection){

        result = "tied";
        currentRound.textContent = `You ${result} this round!`
        
    } else {

        result = "lost";
        computerScore++;
        currentRound.textContent = `You ${result} this round! ${computerSelection} beats ${playerSelection}.`
        
    }

    runningScore.innerText = `Your score is ${userScore}. The computer's score is ${computerScore}`;


    //If either player reaches a score of 5, display winner in endScore and clear score.
    if (userScore == 5 || computerScore == 5){

        if (userScore == 5){
            finalResult = "Won"
        } else {
            finalResult = "Lost"
        }

        userScore = 0;
        computerScore = 0;
        currentRound.classList.add("hidden");
        endScore.classList.remove("hidden");
        endScore.innerText = `Game complete, You ${finalResult}!`
    }

    

    //return the result
    return result;
}



//Event Listeners for buttons

let rps = document.querySelectorAll(".rps");

rps.forEach(x => {
    
    let id = x.id;

    console.log(id);
    x.addEventListener("click", () => playRound(id))

})




//Write a function called 'playRound()' that will play a single round of 'Rock Paper Scissors'.
let playRound = (playerSelection) => {

    //define div for displaying result
    let resultArea = document.querySelector("#result");
    
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

    //Determine if the player won and console log a string that declares the winner of the round in the format "You Lose! Paper beats Rock."
    let result;

    if (playerSelection === "Rock" && computerSelection === "Scissors" || 
        playerSelection === "Scissors" && computerSelection === "Paper" ||
        playerSelection === "Paper" && computerSelection === "Rock"){

        result = "Win";

        console.log(`You ${result}! ${playerSelection} beats ${computerSelection}.`)
        resultArea.textContent = `You ${result}! ${playerSelection} beats ${computerSelection}.`
        
        

    } else if (playerSelection === computerSelection){

        result = "Tied";

        console.log(`You ${result}!`)
        resultArea.textContent = `You ${result}!`
        

    } else {

        result = "Lost";

        console.log(`You ${result}! ${computerSelection} beats ${playerSelection}.`)
        resultArea.textContent = `You ${result}! ${computerSelection} beats ${playerSelection}.`
        
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




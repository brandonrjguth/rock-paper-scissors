//Write a function called 'playRound()' that will play a single round of 'Rock Paper Scissors'.
let playRound = () => {

    //Prompt for player selection 
    let playerSelection = prompt();

    //Make the selection case insensitive
    playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();

    //If the player has not entered a valid option, restart round and prompt again
    if (playerSelection != "Rock" || playerSelection != "Paper" || playerSelection != "Scissors"){
        alert("Please input 'Rock', 'Paper', or 'Scissors'");
        playRound();
    }


    //Randomly assign the computers selection
    //by generating a number between 1 and 3
    let computerSelection = Math.Floor(Math.random()*3 + 1);

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
    //return the result


//Create a new function called 'game()' which calls the 'playRound' function 5 times,
//track the score
//determine and declares a winner, loser, or tie game.
}
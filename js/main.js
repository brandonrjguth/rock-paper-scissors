//Write a function called 'playRound()' that will play a single round of 'Rock Paper Scissors'.
let playRound = () => {

    let playerSelection;
    
    //Prompt for player selection 
    let playerSelectionPrompt = () => {
    
        playerSelection = prompt("Please choose 'Rock', 'Paper', or 'Scissors'");

         //Make the selection case insensitive
        playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase();

        //If the player has not entered a valid option, restart round and prompt again
        if (playerSelection != "Rock" && playerSelection != "Paper" && playerSelection != "Scissors"){
            alert("Please input 'Rock', 'Paper', or 'Scissors'");
            playerSelectionPrompt();
        }

    }
    
    playerSelectionPrompt();


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
        alert(`You ${result}! ${playerSelection} beats ${computerSelection}.`)
        
        

    } else if (playerSelection === computerSelection){

        result = "Tied";

        console.log(`You ${result}!`)
        alert(`You ${result}!`)
        

    } else {

        result = "Lost";

        console.log(`You ${result}! ${computerSelection} beats ${playerSelection}.`)
        alert(`You ${result}! ${computerSelection} beats ${playerSelection}.`)
        
    }

    //return the result
    return result;
}




//Create a new function called 'game()' which calls the 'playRound' function 5 times,
let game = () => {

    let playerTotalScore = 0;
    let computerTotalScore = 0;

    for (i=0; i<5; i++){

        let result = playRound();

        //track the score
        if (result === "Win"){
            playerTotalScore++;
        }

        else if (result === "Lost"){
            computerTotalScore++;
        }
    }

    //Determine winner out of 5
    let finalResult;

    if (playerTotalScore > computerTotalScore){

        finalResult = "Won";

    } else if (playerTotalScore < computerTotalScore){

       finalResult = "Lost";
        
    } else {

        finalResult = "Tied";

    }

    console.log(`Your score is ${playerTotalScore}. The computers score is ${computerTotalScore}. You ${finalResult}!`)
    alert(`Your score is ${playerTotalScore}. The computers score is ${computerTotalScore}. You ${finalResult}!`)
    

}


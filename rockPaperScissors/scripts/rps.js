function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3); // choice = 0, 1, or 2
    if (choice==0) {
        return 'rock';
    }
    else if (choice==1) {
        return 'paper';
    }
    else { //choice==2
        return 'scissors';
    }
}

function playRound() 
{
    let playerSelection = prompt('Make your Selection!');
    computerSelection = getComputerChoice();
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection==computerSelection) {
        console.log('It\'s a tie!');
        return;
    }
    else { // playerSelection != computerSelection
        var win;
        if (playerSelection=='rock') {
            if (computerSelection=='paper') {
                win = false;
            }
            else { // computerSelection=='scissors'
                win = true;
            }
        }
        else if (playerSelection=='paper') {
            if (computerSelection=='rock') {
                win = true;
            }
            else { //computerSelection=='scissors'
                win = false;
            }

        }
        else { // playerSelection=='scissors'
            if (computerSelection=='rock') {
                win = false;
            }
            else { // computerSelection=='paper'
                win = true;
            }
        }

        if (win) {
            console.log('You Win! ' + playerSelection + ' beats ' + computerSelection + '!'); 
        }
        else { // you lose
            console.log('You Lose... ' + playerSelection + ' loses to ' + computerSelection + '.');
        }

        return win;
    }


}

function playGame()
{
    let numWins=0;
    let numLoss=0;
    let numTies=0;

    for (let i = 0; i < 5; i++) {
        let win = playRound();

        if (win == true)  {
            numWins++;
        }
        else if (win == false) {
            numLoss++;
        }
        else { //tie
            numTies++;
        }
    }
    
    if (numWins > numLoss) {
        console.log('Congrats You\'ve Beaten the Computer!');
    }
    else if (numWins == numLoss) {
        console.log('You and the Computer are evenly matched!');
    }
    else {
        console.log('You\'ve been bested...');
    }
    console.log('You won ' + numWins + ' rounds, tied ' + numTies + ' rounds and lost ' + numLoss + ' rounds.');
    
    let playAgain = prompt('Would you like to play again? (y/n)');

    if (playAgain == 'y') {
        playGame();
    }
    else {
        return 'Goodbye...';
    }
}
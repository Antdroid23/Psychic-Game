//PSEUDO
//When user presses and releases a key (letter), save the letter to userGuesses. Convert Unicode values into letters then convert the letter to lower case.
//If after testing the users choice/guess, and it does not match a character from the array, alert the user to only select a letter. add 1 to guessesLeft;
//if the users choice/guess does not match a previous choice/guess saved to the index of usersGuesses, push it to the array of user guesses so far;
//else, if the users guess/choice does match what the user has already chose/guessed, alert the user to choose another letter.
//if the userGuess is equal to the computerGuess, then increase by 1 to "wins", alert the user that their guess was right, and reset the guessesLeft and guessesSoFar back to their original var values;
//else, if the userGuess is not equal to the computerGuess, then decrease guessesLeft by 1.
//if guestLeft is equal to 0, Increase looses by 1, alert the user that they've lost, and reset he guessesLeft and guessesSoFar back to their original var values.


//Variables
var computerChoice, computerGuesses, guessesLeft, guessesSoFar, wins, losses;

computerChoice = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
computerGuesses = computerChoice[Math.floor(Math.random() * computerChoice.length)];
guessesLeft = 9;
guessesSoFar = []; //users guesses so far array
wins = 0;
losses = 0;


//Functions
function reset (){
    guessesLeft = 9;
    guessesSoFar = [];
}



document.onkeyup = function(event) {
var userGuesses = String.fromCharCode(event.keyCode).toLowerCase();

    if (!/[a-z]/.test(userGuesses)){
        alert ("please choose a letter only");
        guessesLeft++;
    }

    if (guessesSoFar.indexOf(userGuesses) === -1){
        guessesSoFar.push(userGuesses);
        }

    else {
        alert ("You've already guessed this letter, please choose another one");
        guessesLeft++;
    }


    if (userGuesses === computerGuesses) {
        wins++;
        alert ("Your guess is correct, time to guess a different letter!");
        reset()
    }

    else {
        guessesLeft -- ;
    }

    if (guessesLeft === 0) {
        losses++;
        alert ("You lost") 
        reset();
    }

    document.querySelector('#win').innerHTML = "Wins: " + wins;
    document.querySelector('#loss').innerHTML = "Losses: " + losses;
    document.querySelector('#guessesLeft').innerHTML = "Number of guesses left: " + guessesLeft;
    document.querySelector('#guessesSoFar').innerHTML = " Your guesses so far: " + guessesSoFar;

};

console.log ()
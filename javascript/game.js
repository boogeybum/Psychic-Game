// Variable for the computer to randomly select a letter for the player to try and guess.
var compChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Game play variables start values
var wins = 0;
var losses = 0;
var guesses = 10;
var guessesLeft = 10;
var guessedLetters = [];
var compGuess = null;

// Variable that holds the random computer selection
// var compGuess = compChoices[Math.floor(Math.random() * compChoices.length)];


//Allows the player to guess # of times based on the guesses variable value
function updateGuessesLeft() {
    document.querySelector("#guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
};

//Selects a new letter at random for the player to try and guess.
function updatecompGuess() {
    this.compGuess = this.compChoices[Math.floor(Math.random() * this.compChoices.length)];
};

//Displays wrong letters guessed in a round
function updateGuessesSoFar() {
    document.querySelector("#guessesSoFar").innerHTML = "Your Guesses So Far: " + guessedLetters.join(", ");
};

//Reset at the end of a round
var reset = function() {
    totalGuesses = 10;
    guessesLeft = 10;
    guessedLetters = [];

    updatecompGuess();
    updateGuessesLeft();
    updateGuessesSoFar();
}

//Calls the functions
updatecompGuess();
updateGuessesLeft();

//compares the player's input with the array of possible choices.
document.onkeyup = function(event) {
    var playerGuess = String.fromCharCode(event.keyCode).toLowerCase();
    var check = compChoices.includes(playerGuess);
    // console.log(playerGuess);

    //alerts the player of an invalid input selection
    if (check === false) {
        alert("That is not a valid guess. Pick a letter from the alphabet.");
        return false;

    //evaluate player input and determine guesses left, wins and losses
    } else if (check === true) {
        guessesLeft--;
        guessedLetters.push(playerGuess);
        updateGuessesLeft();
        updateGuessesSoFar();

        if (guessesLeft > 0) {
            if (playerGuess == compGuess) {
                wins++;
                document.querySelector("#wins").innerHTML = "Wins: " + wins;
                playerGuess = playerGuess.toUpperCase();
                reset();
            }
        } else if (guessesLeft == 0) {
            losses++;
            document.querySelector("#losses").innerHTML = "Losses: " + losses;
            reset();
        }
        return false;
    } else {
        alert("An error has occurred.")
    }
};

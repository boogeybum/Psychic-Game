var compGuessArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guesses = 5;
var guessesLeft = 5;
var guessedLetters = [];
var letterToGuess = null;

var compGuess = compGuessArray[Math.floor(Math.random()*compGuessArray.length)];

function updateGuessesLeft() {
    document.querySelector("#guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
};

function updateLetterToGuess() {
    this.letterToGuess = this.compGuessArray[Math.floor(Math.random() * this.compGuessArray.length)];
};

function updateGuessesSoFar() {
    document.querySelector("#guessesSoFar").innerHTML = "Your Guesses So Far: " + guessedLetters.join(", ");
};

var reset = function() {
    guessesLeft = 5;
    guessedLetters = [];

    updateLetterToGuess();
    updateGuessesLeft();
    updateGuessesSoFar();
}

updateLetterToGuess();
updateGuessesLeft();

document.onKeyup = function(event) {
    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    var check = compGuessArray.includes(userGuess);

    if (check === false) {
        return false;
    } else if (check === true) {
        guessesLeft--;
        guessedLetters.push(userGuess);
        updateGuessesLeft();
        updateGuessesSoFar();

        if (guessesLeft > 0) {
            if (userGuess == letterToGuess) {
                wins++;
                document.querySelector("#wins").innerHTML = "Wins: " + wins;
                userGuess = userGuess.toUpperCase();
                reset();
            }
        } else if (guessesLeft === 0) {
            losses++;
            document.querySelector("#losses").innerHTML = "Losses: " + losses;
            reset();
        }
        return false;
    }
};

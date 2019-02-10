// Random choices for computer to choose from
var compGuessArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Set all start values to 0
var wins = 0;
var losses = 0;
var guesses = 9;
var guessesLeft = 9;
var guessedLetters = [];
var letterToGuess = null;

// This tells the computer to select a random number from the compGuessArray
var compGuess = compGuessArray[Math.floor(Math.random()*compGuessArray.length)];

//This sets the number of guesses the player can make
function updateGuessesLeft() {
    document.querySelector("#guessesLeft").innerHTML = "Guesses Left " + guessesLeft;
};

function updateLetterToGuess() {
    this.letterToGuess = this.compGuessArray[Math.floor(Math.random() * this.compGuessArray.length)];
    console.log(letterToGuess);
};


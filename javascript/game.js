var compGuessArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var guessesLeft = 9;
var letterToGuess = null;

var compGuess = compGuessArray[Math.floor(Math.random()*compGuessArray.length)];

function updateGuessesLeft() {
    document.querySelector("#guessesLeft").innerHTML = "Guesses Left " + guessesLeft;
};

function updateLetterToGuess() {
    this.letterToGuess = this.compGuessArray[Math.floor(Math.random() * this.compGuessArray.length)];
};


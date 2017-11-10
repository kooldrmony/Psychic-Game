var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var wins = 0;
var losses = 0;
var guessesLeft, guessedLetters, letterToGuess;

resetGame();
display();

document.onkeyup = function(event) {
  var guess = event.key;
  if (guess === letterToGuess) {
    win();
  } else if (guessesLeft - 1 === 0) {
    lost();
  } else {
    fail(guess);
  }

  display();
}

function display() {
  var winsP = document.getElementById("wins");
  var lossesP = document.getElementById("losses");
  var guessLeft = document.getElementById("guessLeft");
  var letterGuessed = document.getElementById("guessed");
  winsP.innerHTML = "Wins: " + wins;
  lossesP.innerHTML = "losses: " + losses;
  guessLeft.innerHTML = "Guesses left: " + guessesLeft;
  letterGuessed.innerHTML = "Your guesses so far: " + guessedLetters.join(',');
}

function win() {
  wins++;
  resetGame();
}

function lost() {
  losses++;
  resetGame();
}

function fail(letter) {
  guessesLeft--;
  guessedLetters.push(letter);
}

function resetGame() {
  guessesLeft = 9;
  guessedLetters = [];
  letterToGuess = letters[Math.floor(Math.random() * letters.length)];
  console.log("Letter to guess: " + letterToGuess);
}
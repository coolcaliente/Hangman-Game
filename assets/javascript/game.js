// global variables
//===================================================================================

// below is the arrary of possible words

var allWords = ["andromeda", "aquarius", "aries", "cancer", "cassiopeia", "gemini", "leo", "orion", "scorpio", "sagittarius"];

var currentWord = "";

var lettersinWord = [];

var numBlanks = 0;

var blanksAndSuccesses = [];

var wrongLetters = [];

//var underScore = [];

// Counters

var wins = 0;
var lossCount = 0;
var guessesLeft = 9;


// fuctions
//===================================================================================

function startGame() {
    currentWord = allWords[Math.floor(Math.random() * allWords.length)];
    lettersinWord = currentWord.split("");
    numBlanks = lettersinWord.length;

    // Reset

    guessesLeft = 9;
    wrongLetters = [];
    blanksAndSuccesses = [];

    // blanks

    for (var i = 0; i < numBlanks; i++) {
        blanksAndSuccesses.push("_");
    }

    //change html 
    document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join("  ");
    document.getElementById("numGuesses").innerHTML = guessesLeft;
    document.getElementById("winCounter").innerHTML = wins;

    console.log(currentWord);
    console.log(lettersinWord);
    console.log(numBlanks);
    console.log(blanksAndSuccesses);
}

function checkLetters(letter) {
    //check if letter exists in word selected

    var isLetterInWord = false;

    for (var i = 0; i < numBlanks; i++) {
        if (currentWord[i] == letter) {
            isLetterInWord = true;
        }
    }

    //check where word exists and populate array

    if (isLetterInWord) {
        for (var i = 0; i < numBlanks; i++) {
            if (currentWord[i] == letter) {
                blanksAndSuccesses[i] = letter;
            }
        }
    }
    else {
        wrongLetters.push(letter);
        guessesLeft--
    }
}

function roundComplete(){

    //update html to reflect most recent info
    document.getElementById("numGuesses").innerHTML = guessesLeft;
    document.getElementById("wordToGuess").innerHTML = blanksAndSuccesses.join("  ");
    document.getElementById("wrongGuesses").innerHTML = wrongLetters.join("  ");


    if (lettersinWord.toString() == blanksAndSuccesses.toString()) {

    }

    // check if user won
    if (lettersinWord.toString() == blanksAndSuccesses.toString()) {
        wins++;
        alert("You Won!");

        // Updates win counter
        document.getElementById("winCounter").innerHTML = wins;

        startGame();
    }

    // check if user lost 
    else if (guessesLeft == 0) {
        lossCount++;
        alert("You Lost!");

        startGame();
    }
}

// Main Procesess
//===================================================================================

// Initiates code first time
startGame();

// registers keystrokes of user

document.onkeyup = function (event) {
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    checkLetters(letterGuessed);
    roundComplete();
}

        // computer chooses a single word from a group of possible words

        // below is the arrary of possible words


       // var underScore = [];



        // below is the random selection of a word from the list of possible words 

       // var currentWord = allWords[Math.floor(Math.random() * allWords.length)];
       // console.log(currentWord);


        // underscores appear in same length of the word

      //  var wordUnderscore = () => {
       //     for (var i = 0; i < currentWord.length; i++) {
       //         underScore.push("_");
       //     }
     //       return underScore;
     //   }

      //  console.log(wordUnderscore());

        // user types letters in keyboard

        // document.addEventListener("keypress", (event) => {
        //     var keyword = String.fromCharCode(event.keyCode);
        //     console.log(keyword);
        // });

     //   document.onkeyup = function () {

      //      userGuess = String.fromCharCode(event.keyCode).toLowerCase();
    //        console.log("Key entered: " + userGuess);
    //    }

        // var userGuess = document.onkeyup(event.keyCode).toLowerCase();
        // console.log(userGuess);


            // check if letter is correct 54:52

            //if the letter typed is correct, the letter displays in the appropriate blank space

            // the correct letter is added to the "Letters already used" section

            // if the letter typed incorrect, the letter displays in the "Letters already used section" and "number of guesses remaining" decreases by one

            // if all the letters are guessed, and image appears of the constellation and "wins" counter is increased by 1

            // word resets and player can guess again

            // if the counter reaches 0, the word resets to a new word
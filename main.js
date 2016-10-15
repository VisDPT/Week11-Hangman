// //main.js will contain the logic of your app. Running it in Terminal/Bash will start the game.
// // The app should end when a player guesses the correct word or runs out of guesses.


//var letter = require('./letter.js');
var inquirer = require('inquirer');




var SelectedWord = require('./game.js');
var Word = require('./word.js');
var Letter = require('./letter.js')

var userGuessesArray = [];
var guessesLeft = 10;


var noPlay = function() {
    console.log("=======================================\n" +
        "♪ ♫ ♪ ♫ ♪ ♫ ♪ ♫ ♪ ♫ ♪ ♫ ♪ ♫ ♪ ♪ ♫ ♪ ♫ ♪\n" +
        "                                       \n" +
        "YOU ARE MISSING OUT ON SOME SERIOUS FUN!!\n" +
        "            ╲╲╲╲╲┏━━━┓╱╱╱╱╱\n" +
        "♫   ♫   ♫   ╲┏━━━┻━━━┻━━━┓╱\n" +
        "  ♪   ♪   ♪ ╲┃╭━╮┏━━━┓╭━╮┃╱\n" +
        "            ╱┃┃╳┃┣◯━◯┫┃╳┃┃╲\n" +
        "            ╱┃╰━╯┣━━━┫╰━╯┃╲\n" +
        "            ╱┃┈▊▊▊▊┈▂▃▅▇┈┃╲\n" +
        "            ╱┗━━━━━━━━━━━┛╲\n" +
        "                                       \n" +
        "♪ ♫ ♪ ♫ ♪ ♫ ♪ ♫ ♪ ♫ ♪ ♫ ♪ ♫ ♪ ♪ ♫ ♪ ♫ ♪\n" +
        "=======================================");
}


var play = function() {
    if (userGuessesArray.length <= 9) {
        inquirer.prompt([{
            type: "input",
            message: "Guess a letter.",
            name: "guess",
        }, ]).then(function(answers) {
            //console.log("You chose " +answers.guess);
            SelectedWord.guess(answers.guess);
            console.log(SelectedWord.show());

            userGuessesArray.push(answers.guess);
            //DEBUG TO SEE IF ARRAY WORKS!
            console.log("You guessed:" + userGuessesArray);
            
            console.log("You have " + guessesLeft + " guesses left!");
            //console.log (SelectedWord);
            //console.log(SelectedWord.letters[0].value);

            var ugLowercase = answers.guess;
            var lcGuess = ugLowercase.toLowerCase();

           guessesLeft--;



            // for (var i = 0; i < SelectedWord.letters.length; i++) {
            //     //SelectedWord.letters[i].value.length

            //     if (SelectedWord.letters[i].value == lcGuess) {
            //         //console.log(SelectedWord);
            //         console.log("GOOD JOB");
            //         var showLetter = Letter.prototype.show(SelectedWord.letters[i].value);
            //         console.log (showLetter);
            //         //console.log(SelectedWord.letters[i].value.length);

            //     }
            //     else {

            //     }


            // }
            play();
        });
    }
}



var startGame = function() {
    inquirer.prompt([{ // Start
        type: "confirm",
        message: "\n" +
            ("*****************************************************************\n" +
            "\n" +
            "   ╔══╗ ♫      ♪ ♫ ♪ ♫ ♪ ♫ ♪ ♫ ♪ ♫ ♪ ♫ ♪ ♫ ♪ ♫ ♪ ♪ ♫ ♪ ♫ ♪ ♫ ♪\n" +
            "   ║██║♫♪        ARE YOU READY TO PLAY MUSICAL HANGMAN?   \n" +
            "   ║ ◎♫♪♫        To Play: Guess a letter! You get 10 tries!\n" +
            "   ╚══╝        ♪ ♫ ♪ ♫ ♪ ♫ ♪ ♫ ♪ ♫ ♪ ♫ ♪ ♫ ♪ ♫ ♪ ♪ ♫ ♪ ♫ ♪ ♫ ♪\n" +
            "\n" +
            "*****************************************************************\n"),
            

        name: "confirm",
        default: true
    }, ]).then(function(user) {
        //if no, then print something
        if (user.confirm) {
            play();
        }
        //if yes begin game functions
        else {
            noPlay();

            //startGame();
        }
    });
}

startGame();

// //main.js will contain the logic of your app. Running it in Terminal/Bash will start the game.
// // The app should end when a player guesses the correct word or runs out of guesses.


//var letter = require('./letter.js');
var inquirer = require('inquirer');




var SelectedWord = require('./game.js');
var Word = require('./word.js');
var Letter = require('./letter.js')

var userGuessesArray=[];
var guessesLeft = 10;


var noPlay = function() {
    console.log("=======================================" +
            "♪ ♫ ♪ ♫ ♪ ♫ ♪ ♫ ♪ ♫ ♪ ♫ ♪ ♫ ♪ ♪ ♫ ♪ ♫ ♪" +
            "                                       \n"+
            "You are missing out on some serious fun!\n"+
                        "            ╲╲╲╲╲┏━━━┓╱╱╱╱╱\n"+
                        "♫   ♫   ♫   ╲┏━━━┻━━━┻━━━┓╱\n"+
                        "  ♪   ♪   ♪ ╲┃╭━╮┏━━━┓╭━╮┃╱\n"+
                        "            ╱┃┃╳┃┣◯━◯┫┃╳┃┃╲\n"+
                        "            ╱┃╰━╯┣━━━┫╰━╯┃╲\n"+
                        "            ╱┃┈▊▊▊▊┈▂▃▅▇┈┃╲\n"+
                        "            ╱┗━━━━━━━━━━━┛╲\n"+
            "                                       \n" +
            "♪ ♫ ♪ ♫ ♪ ♫ ♪ ♫ ♪ ♫ ♪ ♫ ♪ ♫ ♪ ♪ ♫ ♪ ♫ ♪\n"+
            "=======================================");
}


var play = function() {
    if (userGuessesArray.length <= 9) {
        inquirer.prompt([{
            type: "input",
            message: "Guess a letter.",
            name: "guess",
        }, 
        ]).then(function(answers) {
            //console.log("You chose " +answers.guess);
            userGuessesArray.push(answers.guess);
            //DEBUG TO SEE IF ARRAY WORKS!
            console.log(userGuessesArray);
            guessesLeft --;
            console.log("You have " + guessesLeft + "guesses left!");
            //console.log (SelectedWord);
            //console.log(SelectedWord.letters[0].value);

            var ugLowercase = answers.guess;
            var lcGuess =ugLowercase.toLowerCase();


             for (var i = 0; i < SelectedWord.letters.length ; i++) {
                //SelectedWord.letters[i].value.length
                 if (SelectedWord.letters[i].value == lcGuess) {
                     console.log("GOOD JOB");
                   //console.log(SelectedWord.letters[i].value.length);

                 }
             }
            play();

         


        });
    }
}



var startGame = function() {
    inquirer.prompt([{ // Start
        type: "confirm",
        message: "\n" +
                    "   ╔══╗ ♫      ♪ ♫ ♪ ♫ ♪ ♫ ♪ ♫ ♪ ♫ ♪ ♫ ♪ ♫ ♪ ♫ ♪ ♪ ♫ ♪ ♫ ♪ ♫ ♪\n" +
                    "   ║██║♫♪        ARE YOU READY TO PLAY MUSICAL HANGMAN?   \n" +
                    "   ║ ◎♫♪♫        To Play: Guess a letter! You get 5 tries!\n" +
                    "   ╚══╝        ♪ ♫ ♪ ♫ ♪ ♫ ♪ ♫ ♪ ♫ ♪ ♫ ♪ ♫ ♪ ♫ ♪ ♪ ♫ ♪ ♫ ♪ ♫ ♪\n",
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

                    // if (guesses.length < 8) {
                    //     inquirer.prompt([
                    //         // Here we create a basic text prompt.
                    //         {
                    //             type: "input",
                    //             message: "Guess a letter.",
                    //             name: "guess",
                    //         },


                            // If we log that user as a JSON, we can see how it looks.
                            // console.log(JSON.stringify(user, null, 2));

                            // If the user confirms, we displays the user's name and pokemon from the answers. 

          


                        // Here we ask the user to confirm.


                        // Once we are done with all the questions... "then" we do stuff with the answers
                        // In this case, we store all of the answers into a "user" object that inquirer makes for us. 



                        // If we log that user as a JSON, we can see how it looks.
                        // console.log(JSON.stringify(user, null, 2));



                        // If the user guess == letter.value, we displays the user letter


                        // If the user guess == letter.value, we displays the user letter 





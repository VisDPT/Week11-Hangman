// //main.js will contain the logic of your app. Running it in Terminal/Bash will start the game.
// // The app should end when a player guesses the correct word or runs out of guesses.


//var letter = require('./letter.js');
var inquirer = require('inquirer');

var Letter = require('./game.js');
var Word = require('./word.js');
console.log(Word.value);

inquirer.prompt([{ // Start
        type: "confirm",
        message: "\n" +
            "   ╔══╗ ♫      ♪ ♫ ♪ ♫ ♪ ♫ ♪ ♫ ♪ ♫ ♪ ♫ ♪ ♫ ♪ ♫ ♪ ♪ ♫ ♪ ♫ ♪ ♫ ♪\n" +
            "   ║██║♫♪        ARE YOU READY TO PLAY MUSICAL HANGMAN?   \n" +
            "   ║ ◎♫♪♫   	  To Play: Guess a letter! You get 5 tries!\n" +
            "   ╚══╝        ♪ ♫ ♪ ♫ ♪ ♫ ♪ ♫ ♪ ♫ ♪ ♫ ♪ ♫ ♪ ♫ ♪ ♪ ♫ ♪ ♫ ♪ ♫ ♪\n" ,
        name: "confirm",
        default: true

    },

    // Here we create a basic text prompt.
    {
        type: "input",
        message: "What is your first guess?",
        name: "firstGuess",
    },

    {
        type: "input",
        message: "What is your second guess?",
        name: "secondGuess"
    },

    {
        type: "input",
        message: "What is your third guess?",
        name: "thirdGuess"
    },

    {
        type: "input",
        message: "What is your fourth guess?",
        name: "fourthGuess"
    },

    {
        type: "input",
        message: "What is your fifth guess?",
        name: "fifthGuess"
    },


    // Here we ask the user to confirm.


    // Once we are done with all the questions... "then" we do stuff with the answers
    // In this case, we store all of the answers into a "user" object that inquirer makes for us. 
]).then(function(user) {


    // If we log that user as a JSON, we can see how it looks.
   // console.log(JSON.stringify(user, null, 2));

    // If the user confirms, we displays the user's name and pokemon from the answers. 
    if (user.confirm) {

        console.log("♪ ♫ ♪ ♫ ♪ ♫ ♪ ♫ ♪ ♫ ♪ ♫ ♪ ♫ ♪ ♪ ♫ ♪ ♫ ♪");
        console.log("");
        console.log("Welcome " + user.name + "! \n");

        console.log("Your guesse");
        console.log("♪ ♫ ♪ ♫ ♪ ♫ ♪ ♫ ♪ ♫ ♪ ♫ ♪ ♫ ♪ ♪ ♫ ♪ ♫ ♪");

        // If the user does not confirm, then a message is provided and the program quits. 
    } else {

        console.log("");
        console.log("");
        console.log("You are missing out on some serious fun!");
        console.log("");
        console.log("");

    }

});

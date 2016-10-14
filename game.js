//Your game.js file will randomly select a word for the player.
var Word = require('./word.js');
var Letter = require('./letter.js')





var wordsArray = ["BEATLES", "U2", "PHARELL", "TUPAC", "RIHANNA", "COLDPLAY"];

var randomWord = wordsArray[Math.floor(Math.random()*wordsArray.length)];

var SelectedWord = new Word(randomWord);

//DEBUGGING
//console.log (SelectedWord); //Prints the random chose word!
//console.log (SelectedWord.value); //Prints the letter of chose word!






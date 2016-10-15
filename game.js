//Your game.js file will randomly select a word for the player.
var Word = require('./word.js');
var Letter = require('./letter.js')





var wordsArray = ["beatles", "aerosmith", "pharell", "tupac", "rihanna", "coldplay"];

var randomWord = wordsArray[Math.floor(Math.random()*wordsArray.length)];

var SelectedWord = new Word(randomWord);

//DEBUGGING
//console.log (SelectedWord); //Prints the random chose word!
console.log (SelectedWord.value); //Prints the letter of chose word!
//console.log (SelectedWord.letters);

//console.log (SelectedWord.letters[1].value);

module.exports = SelectedWord;





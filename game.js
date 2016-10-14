//Your game.js file will randomly select a word for the player.
var Word = require('./word.js');


Word.value = ["Beatles", "U2", "Pharell", "Tupac", "Rihanna", "Coldplay"]
console.log (Word.value);

var chosenWord = Word.value[Math.floor(Math.random()*Word.value.length)]
console.log(chosenWord);
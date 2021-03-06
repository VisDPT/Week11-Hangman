// //Both letter.js and word.js should be constructor files:
// word.js should contain all of the methods which will check the letters guessed versus the random word selected.
// letter.js should control whether or not a letter appears as a "_" or as itself on-screen.




var Letter = require('./letter.js')

function Word(value) {
	// The word we want our users to guess
	this.value = value;
	// An array of Letter objects that represent our word
	this.letters = value.split("")
		.map(function(v) {
			return new Letter(v);
			
		});
}

// Takes Letters and calls .show on each one,
// collects them into a new array,
// calls .join to return a string
Word.prototype.show = function() {
	return this.letters
		.map(function(v) {
			return v.show();
		})
		.join();
}

// Modifiy any correctly guessed letter to set visible to true
// then it will return true or false depending on if a correct letter was guessed
Word.prototype.guess = function(guess) {
	return this.letters
		.map(function(l) {
			var match = (guess === l.value);
			l.visible = l.visible || match;
			return l;
		})
		//tests whether some element in the array passes the test implemented by the provided function.
		.some(function(v) {
			return v;
		});
}

// Return true or false depending on if the word has been completely guessed
Word.prototype.finished = function() {
	return this.show() === this.value;
}

module.exports = Word;
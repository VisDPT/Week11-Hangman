// //Both letter.js and word.js should be constructor files:
// word.js should contain all of the methods which will check the letters guessed versus the random word selected.
// letter.js should control whether or not a letter appears as a "_" or as itself on-screen.


// this is your constructor
function Letter(value) {
    this.value = value;
    this.visible = false;
}

Letter.prototype.show = function() { //show me the letter, if visible, I get the letter
    if (this.visible) {
        return this.value; 
    } else {
        return '_';
    }
}

module.exports = Letter;

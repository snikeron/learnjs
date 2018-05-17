var upper = 10;
var randomNumber = getRandomNumber(upper);
var guess;
var guessCount = 0;
var correctGuess = false;

function getRandomNumber(upper) {
    var num = Math.floor( Math.random() * upper ) + 1;
    return num;
}

// DO WHILE LOOP example
// do {
//     guess = prompt(`I am thinking of a number between 1 and ${upper}. What is it?`);
//     guessCount += 1;
//     if (parseInt(guess) === randomNumber) {
//         correctGuess = true
//     }
// } while ( ! correctGuess ) 

while ( guessCount < 10 ) {
    guess = prompt(`I am thinking of a number between 1 and ${upper}. What is it?`);
    guessCount += 1;
    if (parseInt(guess) === randomNumber) {
        correctGuess = true;
        break;
    }
}  

if ( correctGuess ) {
    document.write(`<h1>You have correctly guessed the number ${randomNumber}!</h1>`);
    document.write(`<p>It took you ${guessCount} tries to guess the number.</p>`)
} else {
    document.write('<h1>Sorry, you did not guess the right number.</h1>')
    document.write(`The number was ${randomNumber}`)
}
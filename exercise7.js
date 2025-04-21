
function guessTheNumberGame(){
    let random = Math.floor(Math.random() * 5) + 1;
    let guess = prompt("Guess a number between 1 and 5:")
    if (random===guess) {
        alert("You guessed right.");
    }
    else {alert("You guessed wrong.");}
}
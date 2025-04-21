
function guessTheNumberGame(){
    let random = Math.floor(Math.random() * 5) + 1;
    let guess = prompt("Guess a number between 1 and 5:")
    if (guess.trim() === "") {alert("You didn't enter anything");return;}
    if (isNaN(guess)) {alert("Invalid input."); return;}
    if (random===guess) {
        alert("You guessed right.");
    }
    else {alert("You guessed wrong.");}
}
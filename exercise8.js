
function fizzBuzzChallenge(){
    const num = prompt("Enter a number:");
    if (num === null || num.trim() === "") {alert("You didn't type anything."); return;}
    if (isNaN(num)) {alert("Invalid input. Try again."); return;}
    if (num % 3 === 0 & num % 5 === 0) {alert("FizzBuzz!!!");}
    else if (num % 5 === 0) {alert("Bizz!");}
    else if (num % 3 === 0) {alert("Fizz!");}
    else {alert(num);}
}
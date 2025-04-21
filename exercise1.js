function checkEvenOdd() {
    let num = prompt("Enter the number");
    if (num.trim() === "") 
        {alert("You don't enter anything.");return;}   
    if (isNaN(num)) 
            {alert("That is not a number.");}
        else if (num % 2 === 0) {alert("Wow! The number is even.");}
        else {alert ("Yoo! The number is odd.");}
    }
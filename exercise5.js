
function multiplicationTableGenerator() {
    const num = prompt("Enter a number");
    if (num === null || num.trim() ==="") {alert ("You didn't type anything."); return;}
    if (isNaN(num)) {alert("Invalid input.");}   
    let result = ""; 
    for (let i = 1; i <= 12; i++) {
        result += num + "x" + i + "=" + num * i + "\n";}
    {alert("Multiplication Table of " + num + ":\n" + result );}
} 
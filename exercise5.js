
function multiplicationTableGenerator() {
    const num = prompt("Enter a number");
    if (num.trim() ==="") {alert ("You didn't enter anything."); return;}
    if (isNaN(num)) {alert("Invalid input.");return;}   
    let result = ""; 
    for (let i = 1; i <= 12; i++) {
        result += num + "x" + i + "=" + num * i + "\n";}
    {alert("Multiplication Table of " + num + ":\n" + result );}
} 
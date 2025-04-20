//Printing number in ascending order, from 1 to 10
function numberPrint() {
    let num = prompt("Input a number");
    if (num === null || num.trim() === "") {alert("You didn't type anyting."); return;}
    if (isNaN(num)) {alert("That's not a number. Please try again."); return;}
    let result = ""
    for (let i =1; i<=num; i++)
    {result += i + "";}
    if (num > 1) {alert("The numbers are: " + result.trim());}
    else if (num === 1) {alert("The number is: " + result.trim());}    
    else if (num <= 0) {alert("Invalid");}
}
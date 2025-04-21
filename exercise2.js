//To create a calculator for two numbers only with the operations "+,*,-,/"
function basicCalculator() {
    let num1 = prompt("Enter the first number");
    let operator = prompt("Enter operator (+,*,-,/).");
    let num2 = prompt("Enter the second number");

    if (num1.trim() === "" && num2.trim() === "") {alert("You didn't enter anything.");return;}
    if (num1.trim() === "" || num2.trim() === "") {alert("You forgot to enter a number.");return;}
    else if (isNaN(num1) || isNaN(num2)) {alert("Invalid input.");return;}
    else if (operator !== "-" && operator !== "+" && operator !== "*" && operator !== "/") {alert("Unknown operator!");}
         else if (operator === "+") result = num1 + num2; 
         else if (operator === "-") result = num1 - num2;
         else if (operator === "*") result = num1 * num2;
         else if (operator === "/") result = num1 / num2;
         {alert(num1 + operator + num2 + "=" + result);}
}
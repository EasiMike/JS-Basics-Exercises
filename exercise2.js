//To create a calculator for two numbers only with the operations "+,*,-,/"
function basicCalculator() {
    let num1 = prompt("Enter the first number");
    let operator = prompt("Enter operator (+,*,-,/).");
    let num2 = prompt("Enter the second number");

    if (num1 === null || num2 === null || num1.trim() === "" || num2.trim() === "") return;
    if (isNaN(num1) || isNaN(num2)) {alert(Invalid);}
    else if (operator === "+") result = num1 + num2;
    else if (operator === "-") result = num1 - num2;
    else if (operator === "*") result = num1 * num2;
    else if (operator === "/") result = num1 / num2;
    else result = "Unknown operator";
    alert("The result is " + result);
}
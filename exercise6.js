//To create a grade checker, ranges from 0 to 100
function gradeChecker() {
    let grade = prompt("Kindly enter your grade (from 0 to 100).");
    if (grade.trim() === "") {alert ("You didn't enter anything."); return;}
    if (isNaN(grade)) {alert("Invalid grade.");}
    else if (grade >= 100) {alert("Invalid input.")}
    else if (grade >= 70) {alert("Your grade is 'A'.");}
    else if (grade >= 60) {alert("Your grade is 'B'.");}
    else if (grade >= 65) {alert("Your grade is 'C'.");}
    else if (grade >= 50) {alert("Your grade is 'D'.");}
    else if (grade >= 45) {alert("Your grade is 'E'.");}
    else if (grade >= 40) {alert("Your grade is 'C'.");}
    else if (grade >= 0) {alert("Your grade is 'F'.");}
    else {alert("Invalid");}
}
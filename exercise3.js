function votingEligibilityChecker() {
    let age = prompt("Please enter your age");
    if (age === null) {alert ("You didn't type anything."); return;}
    if (age.trim === "") {alert("You didn't type anything."); return;}
    if (isNaN(age)) {
        alert("The age entered is invalid");}
    else if (age >= 18) {alert("Yap! You are eligible to vote.");}
    else {alert("Sorry, you are not eligible to vote.");}
}
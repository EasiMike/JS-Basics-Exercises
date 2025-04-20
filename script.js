        // JS to request for the user's name on getting to the page.
const readline = require("readline");
        // To create interface
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
    //      To ask for the name
rl.question("Please enter your name: ", 
    function(input)
    {   const name = input
        if (name && name.trim() !== ""){console.log('Welcome $(name), what do you wanna do today?');}
        else {console.log("Ooops...fine. No name? No problem. You are still here anyway.");}
    rl.close();
    });
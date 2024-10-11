//Guess the number
const correctNum = Math.floor(Math.random() * 10) + 1;

function numGuess() {
    let userInput;
    while (userInput !== correctNum) {
        userInput = parseInt(prompt("Guess a number between 1-10:"));

        if (userInput < correctNum) {
            alert("Too low!");
        } else if (userInput > correctNum) {
            alert("Too High!");
        } else if (userInput === correctNum) {
            alert("Correct!");
        } else {
            alert("Please enter a valid number.");
        }
        
    }
}
numGuess();

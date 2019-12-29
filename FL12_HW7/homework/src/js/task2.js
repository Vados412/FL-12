let max = 8;
let min = 0;
let atempts = 3;
let startGame = confirm("Do you want to play a game?");
let randomNumber = parseInt(Math.floor(Math.random() * (max - min + 1)) + min);
let prize=0;
let totalPrize=0;
let sotka=100;
let poltos=50;
let popoltosa=25;
console.log(randomNumber);
if (startGame !== true) {
  alert("You did not become a billionaire, but can.");
} else {
  game:
    for (;atempts > 0;) {
    if (atempts===3) {
        let userNumber = parseInt(prompt("Choose a roulette pocket number from 0 to 8"));
        if (userNumber===randomNumber) {
            totalPrize=totalPrize+sotka;
            let continueGame = confirm('Congratulation, you won!   Your prize is: '+totalPrize+ '$. Do you want to continue?');
        } else {
            atempts--;
            alert("Attempts left: " + atempts);
        }
    } /*else if (atempts===2) {
        let newrandomNumber = parseInt(Math.floor(Math.random() * (max - min + 1)) + min);
        let userNumber = parseInt(prompt("Choose a roulette pocket number from 0 to 8"));
        if (userNumber===randomNumber) {
            totalPrize=totalPrize+poltos;
        } else {
            atempts--;
            alert("Attempts left: " + atempts);
        }
    } else if (atempts===1) {
        let newrandomNumber = parseInt(Math.floor(Math.random() * (max - min + 1)) + min);
        let userNumber = parseInt(prompt("Choose a roulette pocket number from 0 to 8"));
        if (userNumber===newrandomNumber) {
            totalPrize=totalPrize+popoltosa;
        } else {
            atempts--;
            alert("Attempts left: " + atempts);
            let repeatGame = confirm('Do you want to play a new game?');
        } */

    
  }
}

let max = 8;
const min = 0;
let atempts = 3;
let startGame = confirm('Do you want to play a game?');
let randomNumber = parseInt(Math.floor(Math.random() * (max - min + 1)) + min);
let prize = 0;
let totalPrize = 0;
let sotka = 100;
let poltos = 50;
let popoltosa = 25;
const four = 4;
const two = 2;
const three = 3;
const one = 1;
const cto = 100;
if (startGame !== true) {
  alert('You did not become a billionaire, but can.');
} else {
  for (; atempts > min; ) {
    if (atempts === three) {
      let userNumber = parseInt(
        prompt(
          'Choose a roulette pocket number from 0 to ' +
            max +
            '\r\nAttempts left: ' +
            atempts +
            '\r\nTotal prize: ' +
            totalPrize +
            '\r\nPossible prize on current attempt: ' +
            sotka +
            '$'
        )
      );
      if (userNumber === randomNumber) {
        totalPrize = totalPrize + sotka;
        prize = totalPrize;
        let continueGame = confirm(
          'Congratulation, you won!   Your prize is: ' +
            totalPrize +
            '$. Do you want to continue?'
        );
        if (continueGame === false) {
          alert(
            'Thank you for your participation. Your prize is: ' + prize + '$'
          );
        } else {
          max = max + four;
          atempts = three;
          prize = prize + totalPrize;
          sotka = sotka * two;
          poltos = poltos * two;
          popoltosa = popoltosa * two;
          randomNumber = parseInt(
            Math.floor(Math.random() * (max - min + one)) + min
          );
        }
      } else {
        atempts--;
      }
    } else if (atempts === two) {
      let userNumber = parseInt(
        prompt(
          'Choose a roulette pocket number from 0 to ' +
            max +
            '\r\nAttempts left: ' +
            atempts +
            '\r\nTotal prize: ' +
            totalPrize +
            '\r\nPossible prize on current attempt: ' +
            poltos +
            '$'
        )
      );
      if (userNumber === randomNumber) {
        totalPrize = totalPrize + poltos;
        prize = totalPrize;
        let continueGame = confirm(
          'Congratulation, you won!   Your prize is: ' +
            totalPrize +
            '$. Do you want to continue?'
        );
        if (continueGame === false) {
          alert(
            'Thank you for your participation. Your prize is: ' + prize + '$'
          );
        } else {
          max = max + four;
          atempts = three;
          prize = prize + totalPrize;
          sotka = sotka * two;
          poltos = poltos * two;
          popoltosa = popoltosa * two;
          randomNumber = parseInt(
            Math.floor(Math.random() * (max - min + one)) + min
          );
        }
      } else {
        atempts--;
      }
    } else if (atempts === one) {
      let userNumber = parseInt(
        prompt(
          'Choose a roulette pocket number from 0 to ' +
            max +
            '\r\nAttempts left: ' +
            atempts +
            '\r\nTotal prize: ' +
            totalPrize +
            '\r\nPossible prize on current attempt: ' +
            popoltosa +
            '$'
        )
      );
      if (userNumber === randomNumber) {
        totalPrize = totalPrize + popoltosa;
        prize = totalPrize;
        let continueGame = confirm(
          'Congratulation, you won!   Your prize is: ' +
            totalPrize +
            '$. Do you want to continue?'
        );
        if (continueGame === false) {
          alert(
            'Thank you for your participation. Your prize is: ' + prize + '$'
          );
        } else {
          max = max + four;
          atempts = three;
          prize = prize + totalPrize;
          sotka = sotka * two;
          poltos = poltos * two;
          popoltosa = popoltosa * two;
          randomNumber = parseInt(
            Math.floor(Math.random() * (max - min + one)) + min
          );
        }
      } else {
        atempts--;
        alert(
          'Thank you for your participation. Your prize is: ' + totalPrize + '$'
        );
        let repeatGame = confirm('Do you want to play a new game?');
        if (repeatGame === true) {
          atempts = three;
          randomNumber = parseInt(
            Math.floor(Math.random() * (max - min + one)) + min
          );
          max = four * two;
          totalPrize=min; 
          prize = min;
          sotka = cto;
          poltos= cto/two;
          popoltosa=cto/four;
        } else {
          alert('You did not become a billionaire, but can.');
        }
      }
    }
  }
}

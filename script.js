// 'use strict';
// let message = document.querySelector('.message');
// let scoreText = document.querySelector('.score');
// let highScoreText = document.querySelector('.highscore');


// let secretNumber = Math.trunc(Math.random() * 20 + 1);
// let score = 20;
// let highScore;

// document.querySelector('.check').addEventListener('click', function () {
//   //Get User Input
//   let userGuess = Number(document.querySelector('.guess').value);
  
//   // Check user input
//   if (userGuess == '') {
//     message.textContent = '⛔️ No number';
//   }  
//   else if (userGuess === secretNumber) {
// 		document.querySelector('.number').textContent = secretNumber;
// 		document.getElementById('body').style.backgroundColor = '#00db00';
// 		message.textContent = '🎉 Correct';
// 		highScore = score;
// 		highScoreText.textContent = score;
//   }
//   // Display user if correct or display if wrong
//   else {
//     // Display Too High or Too Low depending on User Guess Comparison
// 		userGuess > secretNumber
// 			? (message.textContent = ' 📈Too High')
//       : (message.textContent = '📉 Too Low');
    
//     // Update score
// 		score--;
// 		// Control the Score to not show Negative numbers
//     if (score < 0) {
// 			scoreText.textContent = '0';
// 		} else {
// 			scoreText.textContent = score;
// 		}
//   }

  
// })


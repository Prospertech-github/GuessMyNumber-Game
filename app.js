let userGuess = document.querySelector(".guess");
let checkBtn = document.querySelector(".check");
let message = document.querySelector(".message");
let body = document.querySelector("#body");
let number = document.querySelector(".number");
let scoreValue = document.querySelector('.score')
let highScoreValue = document.querySelector('.highscore')

let highScore = 0;
let score = 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
// Math.random() * 20 //numbers from 0 -- 19 including decimals
// Math.trunc(Math.random() * 20) //gives us only integers without the decimals 0 - 19
// Math.trunc(Math.random() * 20) + 1 // 0 becomes 1

checkBtn.addEventListener("click", function () {
  //convert userGuess from a string to a number data type
  let guessedNumber = Number(userGuess.value);
  //check if userGuess is equivalent to secret number
  if (guessedNumber == "") {
    message.textContent = "No Number!! Please input your guess";
  } else {
    // if(guessedNumber > secretNumber){
    //     message.textContent = "Too High 📈⬆️"
    // }else if(guessedNumber < secretNumber){
    //     message.textContent = "Too Low 📉⬇️"
    // }else{
    //     message.textContent = "Correct 👍🏽💯"
    //     body.classList.add('victory')
    //     number.textContent = secretNumber;
    // }

    if (guessedNumber == secretNumber) {
      message.textContent = "Correct 👍🏽💯";
      body.classList.add("victory");
      number.textContent = secretNumber;

      if(score > highScore){
        highScore = score
        highScoreValue.textContent = highScore;
      }

    } else {
      guessedNumber > secretNumber
        ? (message.textContent = "Too High 📈⬆️")
        : (message.textContent = "Too Low 📉⬇️");
        score--
        if(score > 0){
            scoreValue.textContent = score;
        }else{
            alert('Game Over')
            resetValues()
        }
    }
  }
});

document.querySelector('.again').addEventListener('click', resetValues)

function resetValues(){
    score = 20;
    body.classList.remove('victory')
    message.textContent = 'Start guessing ...'
    number.textContent = '?';
    userGuess.value = ''
    scoreValue.textContent = '20';
}

//innerHTML()
//insertAdjacentHTML()
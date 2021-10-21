const computerChoiceDisplay = document.getElementById('computer-choice')
const userChoiceDisplay = document.getElementById('user-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice
let computerChoice

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
  userChoice = e.target.id
  userChoiceDisplay.innerHTML = userChoice
  generateComputerChoice()
  getResult()
}))

function generateComputerChoice() {
  const randomNumerGen = Math.floor(Math.random() *5)

  if (randomNumerGen === 0) {
    computerChoice = 'rock'
   }
   if (randomNumerGen === 1) {
    computerChoice = 'paper'
   }
   if (randomNumerGen === 2) {
    computerChoice = 'scissors'
   }
   if (randomNumerGen === 3) {
    computerChoice = 'lizard'
   }
   if (randomNumerGen === 4) {
    computerChoice = 'spock'
   }
   computerChoiceDisplay.innerHTML= computerChoice
}

function getResult() {
  if (computerChoice === userChoice) {
    result = 'Draw!'
  }
  if (computerChoice === 'scissors' && userChoice === 'paper') {
    result = 'You Lost! Better luck next time!'
  }
  if (computerChoice === 'paper' && userChoice === 'rock') {
    result = 'You Lost! Better luck next time!'
  }
  if (computerChoice === 'rock' && userChoice === 'lizard') {
    result = 'You Lost! Better luck next time!'
  }
  if (computerChoice === 'lizard' && userChoice === 'spock') {
    result = 'You Lost! Better luck next time!'
  }
  if (computerChoice === 'spock' && userChoice === 'scissors') {
    result = 'You Lost! Better luck next time!'
  }
  if (computerChoice === 'scissors' && userChoice === 'lizard') {
    result = 'You Lost! Better luck next time!'
  }
  if (computerChoice === 'lizard' && userChoice === 'paper') {
    result = 'You Lost! Better luck next time!'
  }
  if (computerChoice === 'paper' && userChoice === 'spock') {
    result = 'You Lost! Better luck next time!'
  }
  if (computerChoice === 'spock' && userChoice === 'rock') {
    result = 'You Lost! Better luck next time!'
  }
  if (computerChoice === 'rock' && userChoice === 'scissors') {
    result = 'You Lost! Better luck next time!'
  }
  if (computerChoice === 'scissors' && userChoice === 'rock') {
    result = 'Congratulations You Have Won!'
  }
  if (computerChoice === 'rock' && userChoice === 'spock') {
    result = 'Congratulations You Have Won!'
  }
  if (computerChoice === 'spock' && userChoice === 'paper') {
    result = 'Congratulations You Have Won!'
  }
  if (computerChoice === 'paper' && userChoice === 'lizard') {
    result = 'Congratulations You Have Won!'
  }
  if (computerChoice === 'lizard' && userChoice === 'scissors') {
    result = 'Congratulations You Have Won!'
  }
  if (computerChoice === 'scissors' && userChoice === 'spock') {
    result = 'Congratulations You Have Won!'
  }
  if (computerChoice === 'spock' && userChoice === 'lizard') {
    result = 'Congratulations You Have Won!'
  }
  if (computerChoice === 'lizard' && userChoice === 'rock') {
    result = 'Congratulations You Have Won!'
  }
  if (computerChoice === 'rock' && userChoice === 'paper') {
    result = 'Congratulations You Have Won!'
  }
  if (computerChoice === 'paper' && userChoice === 'scissors') {
    result = 'Congratulations You Have Won!'
  }
  
  resultDisplay.innerHTML = result

}

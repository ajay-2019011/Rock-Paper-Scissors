let userPoints = 0, computerPoints = 0;

let values = ["rock", "paper", "scissors"];
function computerPlay() {
  let min = 0;
  let max = 3;
  let randomInt = Math.floor(Math.random() * (max - min)) + min;
  return values[randomInt];
}

const buttons = document.querySelectorAll('.input');
buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      getVal(btn.id);
    });
});

  
const again = document.querySelector('#again');
again.addEventListener('click', startAgain);
function startAgain() {
  userPoints = 0;
  computerPoints = 0;
  result.textContent = "The Score:- Computer-" + computerPoints + ":: You-" + userPoints;
  score.textContent = "";
  choice.textContent = "Make Your choice!! Let's Play the Game";
  winner.textContent = "";
}

const score = document.querySelector('#score');
const choice = document.querySelector('#choice');
const result = document.querySelector('#result');
const winner = document.querySelector('#winner');

function getVal(id) {
  const inp = id;
  if (userPoints <= 5 && computerPoints <= 5) {
    winOrLose(inp, computerPlay());
  }
}

function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}

function winOrLose(userselection, computerselection) {
  if (userPoints == 5 || computerPoints == 5)
    return;

  let userSelection = userselection.toLowerCase();
  let computerSelection = computerselection.toLowerCase();

  choice.textContent = "The Computer chose " + capitalize(computerSelection) + " and you chose " + capitalize(userSelection);


  if (userSelection == computerSelection) {
    score.textContent= "Computer also chose "+capitalize(userSelection)+". Try again!!";
    result.textContent = "The Score:- Computer-" + computerPoints + " :: You-" + userPoints;
  }
  if (userSelection == "rock") {
    if (computerSelection == "scissors") {
      document.getElementById("score").style.color = "forestgreen";//green,limegreen
      score.textContent= "The point goes to you! Rock beats Scissors" ;
      userPoints++;
      result.textContent = "The Score:- Computer-" + computerPoints + " :: You-" + userPoints;
    }
    if (computerSelection == "paper") {
      document.getElementById("score").style.color = "firebrick"; //darkred
      score.textContent = "The point goes to the Computer! Paper beats Rock";
      computerPoints++;
      result.textContent = "The Score:- Computer-" + computerPoints + " :: You-" + userPoints;
    }
  }
  else if (userSelection == "paper") {
    if (computerSelection == "rock") {
      document.getElementById("score").style.color = "forestgreen";
      score.textContent = "The point goes to you! Paper beats Rock";
      userPoints++;
      result.textContent = "The Score:- Computer-" + computerPoints + " :: You-" + userPoints;
    }
    if (computerSelection == "scissors") {
      document.getElementById("score").style.color = "firebrick";
      score.textContent = "The point goes to the Computer! Scissors beats Paper";
      computerPoints++;
      result.textContent = "The Score:- Computer-" + computerPoints + " :: You-" + userPoints;
    }
  }
  else if (userSelection == "scissors") {
    if (computerSelection == "paper") {
      document.getElementById("score").style.color = "forestgreen";
      score.textContent = "The point goes to you! Scissors beats Paper";
      userPoints++;
      result.textContent = "The Score:- Computer-" + computerPoints + " :: You-" + userPoints;
    }
    if (computerSelection == "rock") {
      document.getElementById("score").style.color = "firebrick";
      score.textContent = "The point goes to the Computer! Rock beats Scissors";
      computerPoints++;
      result.textContent = "The Score:- Computer-" + computerPoints + " :: You-" + userPoints;
    }
  }
  else
    score.textContent = "Something went wrong";
   
  if (userPoints == 5) {
    document.getElementById("score").style.color = "green";
    score.textContent = "YOU WON THE GAME!!";
    document.getElementById("winner").style.color = "forestgreen";
    winner.textContent = "Congratulations! You have saved Humanity";
  }
  else if (computerPoints == 5) {
    document.getElementById("score").style.color = "darkred";
    score.textContent = "COMPUTER WON THE GAME!!";
    document.getElementById("winner").style.color = "firebrick";
    winner.textContent = "The Computer has given you a chance! Click on 'Start Again' to start a new match";
  }
  
}

choice.textContent = "Make Your choice!! Let's Play the Game";
score.textContent = "The Score:- Computer-" + computerPoints + " :: You-" + userPoints;


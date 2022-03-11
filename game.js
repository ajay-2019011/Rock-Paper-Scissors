let values = ["rock", "paper", "scissor"];
function computerPlay() {
  let min = 0;
  let max = 3;
  let randomInt = Math.floor(Math.random() * (max - min)) + min;
  return values[randomInt];
}
function userPLay() {
  const input = prompt("Type Rock,Paper or Scissor, Lets PLay!!!");
  winOrLose(input, computerPlay());
}
let ju = 0,jc=0;
function winOrLose(userselection, computerselection) {
  let userSelection = userselection.toLowerCase();
  let computerSelection = computerselection.toLowerCase();
  console.log("The Computer chose " + computerSelection);
  if (userSelection == computerSelection) {
    console.log("Computer also chose the same as you, try again");
  }
  if (userSelection == "rock") {
    if (computerSelection == "scissor") {
      console.log("You Win! " + userSelection + " beats " + computerSelection);
      ju++;
    }
    if (computerSelection == "paper") {
      console.log("You Lose! " + computerSelection + " beats " + userSelection);
      jc++;
    }
  }
  else if (userSelection == "paper") {
    if (computerSelection == "rock") {
      console.log("You Win! " + userSelection + " beats " + computerSelection);
      ju++;
    }
    if (computerSelection == "scissor") {
      console.log("You Lose! " + computerSelection + " beats " + userSelection);
      jc++;
    }
  }
  else if (userSelection == "scissor") {
    if (computerSelection == "paper") {
      console.log("You Win! " + userSelection + " beats " + computerSelection);
      ju++;
    }
    if (computerSelection == "rock") {
      console.log("You Lose! " + computerSelection + " beats " + userSelection);
      jc++;
    }
  }
  else
    console.log("Something went wrong");
}
for (let i = 0; i < 5; i++){
  userPLay();
  console.log("The Score:- Computer-" + jc + " User-" + ju);
}
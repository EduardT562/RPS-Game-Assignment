alert('Welcome to Rock, Paper and Scissors game! Press OK to START!');
const selection = ['Rock', 'Paper', 'Scissors'];
let playerScore = 0;
let computerScore = 0;
let drawScore = 0;

function playerSelection() {
  let choice = prompt('Insert your choice: Rock(1), Paper(2) or Scissors(3)?');
  switch (choice) {
    case '1':
      return 'rock';
    case '2':
      return 'paper';
    case '3':
      return 'scissors';
    default:
      if (
        choice.toLowerCase() === 'rock' ||
        choice.toLowerCase() === 'paper' ||
        choice.toLowerCase() === 'scissors'
      ) {
        return choice;
      } else {
        alert('You have to pick: Rock(1), Paper(2) or Scissors(3)!');
        return 'invalid';
      }
  }
}

function computerSelection() {
  let random = Math.floor(Math.random() * selection.length);
  return selection[random];
}

function playRound(player, computer, round) {
  alert(`Computer picked: ${computer}`);
  if (player.toLowerCase() === computer.toLowerCase()) {
    console.log(`You've chosen ${player} this round!`);
    console.log(`Computer picked ${computer} this round!`);
    console.log(`This Round ${round} is a draw! :|\n -------`);
    alert(`The Round ${round} is a draw! :|`);
    drawScore++;
  } else if (
    (player.toLowerCase() === 'rock' && computer.toLowerCase() === 'paper') ||
    (player.toLowerCase() === 'paper' &&
      computer.toLowerCase() === 'scissors') ||
    (player.toLowerCase() === 'scissors' && computer.toLowerCase() == 'rock')
  ) {
    console.log(`You've chosen ${player} this round!`);
    console.log(`Computer picked ${computer} this round!`);
    console.log(`You've lost this Round ${round}! :(\n -------`);

    alert(`You've lost this Round ${round}! :(`);
    computerScore++;
  } else {
    console.log(`You've chosen ${player} this round!`);
    console.log(`Computer picked ${computer} this round!`);
    console.log(`You've won this Round ${round}! :)\n -------`);

    alert(`You've won this Round ${round}! :)`);
    playerScore++;
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    let choice = playerSelection();
    let computer = computerSelection();

    while (choice === 'invalid') {
      choice = playerSelection();
    }
    playRound(choice, computer, i + 1);
  }

  console.log(
    ' -------' +
      ' \n GAME OVER! Your final game score is ' +
      playerScore +
      ' wins ' +
      computerScore +
      ' loses and ' +
      drawScore +
      ' draws.\n -------'
  );

  alert(
    "GAME OVER! Your game's final score is " +
      playerScore +
      ' wins ' +
      computerScore +
      ' loses and ' +
      drawScore +
      ' draws.'
  );

  if (playerScore === computerScore) {
    console.log('This Game is a Draw! :|');
    alert('This Game is a Draw! :|');
  } else if (computerScore > playerScore) {
    console.log("Computer won this Game! :'( Better luck next time...");
    alert("Computer won this Game! :'( Better luck next time...");
  } else {
    console.log("You've won this Game! :D Congrats!");
    alert("You've won this Game! :D Congrats!");
  }
}
game();

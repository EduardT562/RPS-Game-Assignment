alert('Welcome to Rock, Paper and Scissors game! Press OK to START!');
const selection = ['Rock', 'Paper', 'Scissors'];
let playerScore = 0;
let computerScore = 0;
let drawScore = 0;
const playerResult = document.querySelector('#playerResult');
const playerComputer = document.querySelector('#computerResult');
const gameRound = document.querySelector('#gameRound');
const gameScore = document.querySelector('#gameScore');
const gameResult = document.querySelector('#gameResult');
const choiceBtns = document.querySelectorAll('.choiceBtn');

let player;
let computer;
let roundNr = 1;
let roundResult;

choiceBtns.forEach((button) =>
  button.addEventListener('click', () => {
    if (playerScore != 5 && computerScore != 5) {
      player = button.textContent;
      playerSelection(player);
      computer = computerSelection();
      roundResult = playRound(player, computer, roundNr);
      gameScore.textContent = `Game Score: Player: ${playerScore}, Computer: ${computerScore}, Draws: ${drawScore}`;
      playerResult.textContent = `Player: ${player}`;
      computerResult.textContent = `Computer: ${computer}`;
      gameRound.textContent = `Round: ${roundResult}`;
    }
    checkWinner();
  })
);

const restartBtn = document.querySelector('.restartBtn');
restartBtn.addEventListener('click', () => {
  playerScore = 0;
  computerScore = 0;
  drawScore = 0;
  roundNr = 1;
  player = 'Choose your weapon!';
  computer = 'Warming up...';
  roundResult = 'Starting...';
  gameScore.textContent = `Game Score: Player: ${playerScore}, Computer: ${computerScore}, Draws: ${drawScore}`;
  playerResult.textContent = `Player: ${player}`;
  computerResult.textContent = `Computer: ${computer}`;
  gameRound.textContent = `Round: ${roundResult}`;
  activateButtons();
  displayWinner();
});

function checkWinner() {
  if (playerScore === 5 || computerScore === 5) {
    displayWinner();
    disableButtons();
  }
}
function activateButtons() {
  for (let i = 0; i < choiceBtns.length; i++) {
    choiceBtns[i].disabled = false;
  }
}

function disableButtons() {
  for (let i = 0; i < choiceBtns.length; i++) {
    choiceBtns[i].disabled = true;
  }
}

function displayWinner() {
  if (playerScore === 5) {
    gameResult.textContent = `Game result: You've reached 5 points! You Win! :D`;
  } else if (computerScore === 5) {
    gameResult.textContent = `Game result: Computer reached 5 points! Computer Won... :'(`;
  } else if (playerScore < 5 && computerScore < 5) {
    gameResult.textContent = '';
  }
}

function playerSelection(choice) {
  switch (choice) {
    case '1':
      return selection[0];
    case '2':
      return selection[1];
    case '3':
      return selection[2];
    default:
      if (
        choice === selection[0] ||
        choice === selection[1] ||
        choice === selection[2]
      ) {
        return choice;
      }
  }
}

function computerSelection() {
  let random = Math.floor(Math.random() * selection.length);
  return selection[random];
}

function playRound(player, computer, round) {
  if (player === computer) {
    round = `The Round ${roundNr} is a draw! :|`;
    // console.log(`You've chosen ${player} this round!`);
    // console.log(`Computer picked ${computer} this round!`);
    // console.log(`This Round ${roundNr} is a draw! :|\n -------`);
    // alert(`The Round ${roundResult} is a draw! :|`);

    return roundNr++, drawScore++, round;
  } else if (
    (player === selection[0] && computer === selection[1]) ||
    (player === selection[1] && computer === selection[2]) ||
    (player === selection[2] && computer == selection[0])
  ) {
    round = `You've lost this Round ${roundNr} :(`;
    // console.log(`You've chosen ${player} this round!`);
    // console.log(`Computer picked ${computer} this round!`);
    // console.log(`You've lost this Round ${roundResult}! :(\n -------`);
    // alert(`You've lost this Round ${roundResult}! :(`);

    return roundNr++, computerScore++, round;
  } else {
    round = `You've won this Round ${roundNr} :)`;
    // console.log(`You've chosen ${player} this round!`);
    // console.log(`Computer picked ${computer} this round!`);
    // console.log(`You've won this Round ${roundResult}! :)\n -------`);
    // alert(`You've won this Round ${roundResult}! :)`);

    return roundNr++, playerScore++, round;
  }
}

// for (let i = 0; i < 5; i++) {
//   let choice = playerSelection(player);
//   let computer = computerSelection();

// while (choice === 'invalid') {
//   choice = playerSelection();
// }
// playRound(choice, computer, round + 1 );
// }

// console.log(
//   ' -------' +
//     ' \n GAME OVER! Your final game score is ' +
//     playerScore +
//     ' wins ' +
//     computerScore +
//     ' loses and ' +
//     drawScore +
//     ' draws.\n -------'
// );

// alert(
//   "GAME OVER! Your game's final score is " +
//     playerScore +
//     ' wins ' +
//     computerScore +
//     ' loses and ' +
//     drawScore +
//     ' draws.'
// );

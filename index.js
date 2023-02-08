// alert('Welcome to Rock, Paper and Scissors game! Press OK to START!');
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

playerResult.textContent = 'Player: Preparing...';
playerComputer.textContent = 'Computer: Warming up...';
gameRound.textContent = 'Choose your weapon!';

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
  checkWinner();
});

function checkWinner() {
  if (playerScore === 5) {
    gameResult.textContent = `Game result: You've reached 5 points! You Win! :D`;
    disableButtons();
  } else if (computerScore === 5) {
    gameResult.textContent = `Game result: Computer reached 5 points! Computer Won... :'(`;
    disableButtons();
  } else if (playerScore < 5 && computerScore < 5) {
    gameResult.textContent = '';
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
    return roundNr++, drawScore++, round;
  } else if (
    (player === selection[0] && computer === selection[1]) ||
    (player === selection[1] && computer === selection[2]) ||
    (player === selection[2] && computer == selection[0])
  ) {
    round = `You've lost this Round ${roundNr} :(`;
    return roundNr++, computerScore++, round;
  } else {
    round = `You've won this Round ${roundNr} :)`;
    return roundNr++, playerScore++, round;
  }
}

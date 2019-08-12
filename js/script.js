const STONE = "kamień";
const PAPER = "papier";
const SCISSORS = "nożyce";

const game = function() {
  const playGame = function(playerInput) {
    clearMessages();

    const getMoveName = function(randomNumber) {
      if (randomNumber === 1) {
        return STONE;
      } else if (randomNumber === 2) {
        return PAPER;
      } else if (randomNumber === 3) {
        return SCISSORS;
      } else {
        printMessage("Nie znam ruchu o id " + randomNumber + ".");
        return "nieznany ruch";
      }
    };

    let playerScore = 0;
    let computerScore = 0;
    let contestantsDraw = 0;

    const displayResult = function(computerMove, playerMove) {
      if (computerMove === STONE && playerMove === PAPER) {
        printMessage("Ty wygrywasz!");
        playerScore++;
      } else if (computerMove === SCISSORS && playerMove === STONE) {
        printMessage("Ty wygrywasz!");
        playerScore++;
      } else if (computerMove === PAPER && playerMove === SCISSORS) {
        printMessage("Ty wygrywasz!");
        playerScore++;
      } else if (computerMove === playerMove) {
        printMessage("Remis!");
        contestantsDraw++;
      } else if (
        (computerMove === STONE ||
          computerMove === SCISSORS ||
          computerMove === PAPER) &&
        playerMove === "nieznany ruch"
      ) {
        printMessage("Oszukujesz!");
      } else {
        printMessage("Ty przegrywasz!");
        computerScore++;
      }

      printMessage("Punkty gracza: " + playerScore);
      printMessage("Punkty komputera: " + computerScore);
      printMessage("Remisy: " + contestantsDraw);
    };

    const randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log("Wylosowana liczba to: " + randomNumber);

    const computerMove = getMoveName(randomNumber);

    printMessage("Mój ruch to: " + computerMove);

    console.log("Gracz wpisał: " + playerInput);

    const playerMove = getMoveName(playerInput);

    printMessage("Twój ruch to: " + playerMove);

    displayResult(computerMove, playerMove);
  };

  document.getElementById("play-stone").addEventListener("click", function() {
    playGame(1);
  });

  document.getElementById("play-paper").addEventListener("click", function() {
    playGame(2);
  });

  document
    .getElementById("play-scissors")
    .addEventListener("click", function() {
      playGame(3);
    });
};

game();

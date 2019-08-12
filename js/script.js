const STONE = 'kamień';
const PAPER = 'papier';
const SCISSORS = 'nożyce';

let playerScore = 0;
let computerScore = 0;

function playGame(playerInput) {

    clearMessages();

    function getMoveName(randomNumber) {
        if (randomNumber === 1) {
            return STONE;
        } else if (randomNumber === 2) {
            return PAPER;
        } else if (randomNumber === 3) {
            return SCISSORS;
        } else {
            printMessage('Nie znam ruchu o id ' + randomNumber + '.');
            return 'nieznany ruch';
        }
    }

    function displayResult(computerMove, playerMove) {
        if (computerMove === STONE && playerMove === PAPER) {
            printMessage('Ty wygrywasz!');
            playerScore++;
        } else if (computerMove === SCISSORS && playerMove === STONE) {
            printMessage('Ty wygrywasz!');
            playerScore++;
        } else if (computerMove === PAPER && playerMove === SCISSORS) {
            printMessage('Ty wygrywasz!');
            playerScore++;
        } else if (computerMove === STONE && playerMove === STONE) {
            printMessage('Remis!');
        } else if (computerMove === SCISSORS && playerMove === SCISSORS) {
            printMessage('Remis!');
        } else if (computerMove === PAPER && playerMove === PAPER) {
            printMessage('Remis!');
        } else if ((
                computerMove === STONE ||
                computerMove === SCISSORS ||
                computerMove === PAPER) &&
            playerMove === 'nieznany ruch') {
            printMessage('Oszukujesz!');
        } else {
            printMessage('Ty przegrywasz!');
            computerScore++;
        }
        printMessage('Punkty gracza: ' + playerScore);
        printMessage('Punkty komputera: ' + computerScore);
    }

    let randomNumber = Math.floor(Math.random() * 3 + 1);

    console.log('Wylosowana liczba to: ' + randomNumber);

    let computerMove = getMoveName(randomNumber);

    printMessage('Mój ruch to: ' + computerMove);

    console.log('Gracz wpisał: ' + playerInput);

    let playerMove = getMoveName(playerInput);

    printMessage('Twój ruch to: ' + playerMove);

    displayResult(computerMove, playerMove);
}

document.getElementById('play-stone').addEventListener('click', function () {
    playGame(1);
});

document.getElementById('play-paper').addEventListener('click', function () {
    playGame(2);
});

document.getElementById('play-scissors').addEventListener('click', function () {
    playGame(3);
});